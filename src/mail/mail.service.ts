import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'auth/entities/user.entity';

@Injectable()
export class MailService {

    constructor(private mailerService: MailerService) {}

    async sendUserConfirmation(user: User, token: string) {
        
        const url = `example.com/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Teste App - Confirm your Email',
            template: './confirmation', 
            context: { 
                name: user.name,
                url,
            },
        });

        return `Email sent for receipt ${user.email}`
    }
}