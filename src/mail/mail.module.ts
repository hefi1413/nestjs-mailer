import { MailerModule } from '@nestjs-modules/mailer'; 
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';


@Global()
@Module({
    imports: [
      MailerModule.forRoot({
          transport: {
              host: 'smtp.gmail.com', //process.env.MAIL_HOST,
              port: 587,
              secure: false,
              requireTLS: true,                       
              auth: {
                user: 'qstk2615', //process.env.MAIL_USER,
                pass: 'bbzwmdlaugdytkvi', //process.env.MAIL_PASSWORD,
              },
          },
          defaults: {
              from: 'Teste App',
          },
          template: {
              dir: join(__dirname, './templates'),
              adapter: new HandlebarsAdapter(),
              options: {
                strict: true,
              },
          },
      }),
    ],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule {}