import nodemailer, { TransportOptions, SentMessageInfo } from 'nodemailer';
import axios from 'axios';

interface RequestBody {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

interface Response {
  status(code: number): {
    (): any;
    new (): any;
    json(data: { status: number; message?: string }): void;
  };
}

interface CustomTransportOptions extends TransportOptions {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

const mailConfig: CustomTransportOptions = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER!,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASS!
  }
};

const adminEmail: string = 'Gusthavo Ramos Miguel <gusthavo.rmiguel@gmail.com>';

async function getPubFile(file: string): Promise<string> {
  const res = await axios.get<string>(
    `${process.env.NEXT_PUBLIC_BASE_URL}${file}`
  );
  return res.data;
}

export default async function handler(
  req: { body: RequestBody },
  res: Response
) {
  await sendEmails(req, res);
}

async function sendEmails(req: { body: RequestBody }, res: Response) {
  const transporter = nodemailer.createTransport(mailConfig);

  const template = await getPubFile('/email-templates/template.html');
  const custHtml = await getPubFile('/email-templates/customer.html');
  const adminHtml = await getPubFile('/email-templates/admin.html');
  const custTxt = await getPubFile('/email-templates/customer.txt');
  const adminTxt = await getPubFile('/email-templates/admin.txt');

  const recipEmail = `${req.body.name} <${req.body.email}>`;

  let sendHtml = template
    .replace('%BODY%', custHtml)
    .replace('%NAME%', req.body.name)
    .replace('%EMAIL%', req.body.email)
    .replace('%PHONE%', req.body.phone)
    .replace('%MESSAGE%', req.body.message);

  let sendTxt = custTxt
    .replace('%NAME%', req.body.name)
    .replace('%EMAIL%', req.body.email)
    .replace('%PHONE%', req.body.phone)
    .replace('%MESSAGE%', req.body.message);

  let info: SentMessageInfo = await transporter.sendMail({
    from: adminEmail,
    to: recipEmail,
    subject: 'Mensagem Recebida ✔',
    text: sendTxt,
    html: sendHtml
  });

  if (!info.messageId) {
    res.status(200).json({ status: 0, message: 'Falha no envio da mensagem!' });
    return false;
  }

  sendHtml = template
    .replace('%BODY%', adminHtml)
    .replace('%NAME%', req.body.name)
    .replace('%EMAIL%', req.body.email)
    .replace('%PHONE%', req.body.phone)
    .replace('%MESSAGE%', req.body.message);

  sendTxt = adminTxt
    .replace('%NAME%', req.body.name)
    .replace('%EMAIL%', req.body.email)
    .replace('%PHONE%', req.body.phone)
    .replace('%MESSAGE%', req.body.message);

  info = await transporter.sendMail({
    from: recipEmail,
    to: adminEmail,
    subject: req.body.subject ? req.body.subject : 'Nova Mensagem do Site ✔',
    text: sendTxt,
    html: sendHtml
  });

  if (info.messageId) {
    res.status(200).json({ status: 1 });
  } else {
    res.status(200).json({ status: 0, message: 'Falha no envio da mensagem!' });
  }
}
