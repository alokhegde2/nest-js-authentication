import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type BookmarkDocument = Bookmark & Document;

@Schema()
export class Bookmark {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: now })
  createdDate: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ required: true })
  link: string;
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
