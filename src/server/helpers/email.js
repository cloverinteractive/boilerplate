// @flow
import nodemailer from 'nodemailer';
import { env, isDevelopment } from 'server/helpers/env-access';

type Config = {
  auth: {
    pass: string,
    user: string,
  },
  host: string,
  port: number,
  secure: boolean,
};

type Message = {
  from: string,
  html: string,
  subject: string,
  to: string,
};

const fetchConfig = (): Config => {
  if (isDevelopment) {
    return {
      auth: {
        user: env('ETHEREAL_EMAIL'),
        pass: env('ETHEREAL_PASS'),
      },
      host: env('ETHEREAL_SERVER'),
      port: env('ETHEREAL_PORT', 587),
      secure: env('ETHEREAL_SECURE', false),
    };
  }

  return {
    auth: {
      user: env('PROD_EMAIL'),
      pass: env('PROD_PASS'),
    },
    host: env('EMAIL_SERVER'),
    port: env('EMAIL_PORT', 25),
    secure: env('EMAIL_SECURE', true),
  };
};

export default (options: Message, res: express$Response) => {
  const transporter = nodemailer.createTransport(fetchConfig());


  transporter.sendMail(options, (error, info) => {
    if (isDevelopment) return res.send(`You can view your email here: ${nodemailer.getTestMessageUrl(info)}`);

    return res.send('Thanks! we\'ll get back to you as soon as we can');
  });
};
