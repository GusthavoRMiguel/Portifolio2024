import { NextApiRequest, NextApiResponse } from 'next';
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
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message, subject } = req.body;

      const transporter = nodemailer.createTransport(mailConfig);

      const template = await getPubFile('/email-templates/template.html');
      const custHtml = await getPubFile('/email-templates/customer.html');
      const adminHtml = await getPubFile('/email-templates/admin.html');
      const custTxt = await getPubFile('/email-templates/customer.txt');
      const adminTxt = await getPubFile('/email-templates/admin.txt');

      const recipEmail = `${name} <${email}>`;

      let sendHtml = template
        .replace('%BODY%', custHtml)
        .replace('%NAME%', name)
        .replace('%EMAIL%', email)
        .replace('%PHONE%', phone)
        .replace('%MESSAGE%', message);

      let sendTxt = custTxt
        .replace('%NAME%', name)
        .replace('%EMAIL%', email)
        .replace('%PHONE%', phone)
        .replace('%MESSAGE%', message);

      let info: SentMessageInfo = await transporter.sendMail({
        from: adminEmail,
        to: recipEmail,
        subject: 'Mensagem Recebida ✔',
        text: sendTxt,
        html: sendHtml
      });

      if (!info.messageId) {
        res
          .status(200)
          .json({ status: 0, message: 'Falha no envio da mensagem!' });
        return;
      }

      sendHtml = template
        .replace('%BODY%', adminHtml)
        .replace('%NAME%', name)
        .replace('%EMAIL%', email)
        .replace('%PHONE%', phone)
        .replace('%MESSAGE%', message);

      sendTxt = adminTxt
        .replace('%NAME%', name)
        .replace('%EMAIL%', email)
        .replace('%PHONE%', phone)
        .replace('%MESSAGE%', message);

      info = await transporter.sendMail({
        from: recipEmail,
        to: adminEmail,
        subject: subject ? subject : 'Nova Mensagem do Site ✔',
        text: sendTxt,
        html: sendHtml
      });

      if (info.messageId) {
        res.status(200).json({ status: 1 });
      } else {
        res
          .status(200)
          .json({ status: 0, message: 'Falha no envio da mensagem!' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 0, message: 'Erro interno do servidor.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
