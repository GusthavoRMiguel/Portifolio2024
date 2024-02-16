import handler from '@/pages/api/contact-form';
import axios from 'axios';
import nodemailer from 'nodemailer';
import nodemailerMock from 'nodemailer-mock';
import { SentMessageInfo } from 'nodemailer';
import { IncomingMessage } from 'http';

jest.mock('axios');

describe('sendEmails function', () => {
  let req: { body: any };
  let res: {
    status: jest.Mock<any, any>;
    writeHead: jest.Mock<any, any>;
    write: jest.Mock<any, any>;
  };

  beforeEach(() => {
    req = {
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '123456789',
        message: 'Test message',
        subject: 'Test Subject'
      }
    };

    res = {
      status: jest.fn() as any,
      writeHead: jest.fn() as any,
      write: jest.fn().mockImplementation((data) => {
        res.write.mock.calls[res.write.mock.calls.length - 1][0] += data;
      })
    };

    // Reset mock transporter before each test
    nodemailerMock.mock.reset();
  });

  it('should send emails successfully', async () => {
    axios.get = jest
      .fn()
      .mockResolvedValueOnce({ data: '<html>Mocked template content</html>' });

    await handler(req, res as any);

    const sentMail: SentMessageInfo[] = (
      nodemailerMock as any
    ).mock.getSentMail();

    expect(sentMail).toHaveLength(2);

    const [firstEmail, secondEmail] = sentMail;

    expect(firstEmail.to).toBe(`Test User <test@example.com>`);
    expect(firstEmail.subject).toBe('Mensagem Recebida ✔');
    expect(firstEmail.text).toContain('Test User');
    expect(firstEmail.text).toContain('test@example.com');
    expect(firstEmail.text).toContain('123456789');
    expect(firstEmail.text).toContain('Test message');

    expect(secondEmail.to).toBe(
      'Gusthavo Ramos Miguel <gusthavo.rmiguel@gmail.com>'
    );
    expect(secondEmail.subject).toBe('Test Subject');
    expect(secondEmail.text).toContain('Test User');
    expect(secondEmail.text).toContain('test@example.com');
    expect(secondEmail.text).toContain('123456789');
    expect(secondEmail.text).toContain('Test message');

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status.mock.calls[0][0]).toBe(200);
    expect(res.write).toHaveBeenCalled();
  });

  it('should handle email sending failure', async () => {
    axios.get = jest
      .fn()
      .mockRejectedValueOnce(new Error('Failed to fetch template'));

    await handler(req, res as any);

    const sentMail: SentMessageInfo[] = (
      nodemailerMock as any
    ).mock.getSentMail();

    expect(sentMail).toHaveLength(0);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status.mock.calls[0][0]).toBe(200);
    expect(res.write).toHaveBeenCalled();
  });
});
