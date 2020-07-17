import nodemailer, { Transporter } from 'nodemailer';

import IMailProvider from '../models/IMailProvider';

export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  public async sendMail(to: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      from: '"Equipe GoBarber 👻" <foo@example.com>', // sender address
      to, // list of receivers
      subject: 'Recuperação de senha ✔', // Subject line
      text: body, // plain text body
    });
    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
