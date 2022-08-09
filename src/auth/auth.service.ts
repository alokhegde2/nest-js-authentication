import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schema/user.schema';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  signin() {
    return "I'm signin";
  }

  async signup(dto: AuthDto) {
    try {
      //Generate the password hash
      const hash = await argon.hash(dto.password);

      // save the new user in the db
      await this.userModel.create({
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        hash: hash,
      });
      //return the saved user

      return { msg: 'Signed in Successfully' };
    } catch (error) {
      console.error(error);
      throw new ForbiddenException(error);
    }
  }
}
