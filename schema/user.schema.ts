import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ default: now })
  createdDate: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
