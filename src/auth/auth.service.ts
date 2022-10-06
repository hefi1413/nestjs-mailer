import { Injectable } from '@nestjs/common';
import { MailService } from 'mail/mail.service';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {

    constructor(private mailService: MailService) {}

    async signUp(user: User) {
        const token = Math.floor(1000 + Math.random() * 9000).toString();
        // create user in db
        // ...
        // send confirmation mail
        return await this.mailService.sendUserConfirmation(user, token);
    }
}