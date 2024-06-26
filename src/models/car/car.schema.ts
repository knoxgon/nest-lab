import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, SchemaTypes, Types } from 'mongoose';

@Schema()
export class Car {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ default: '' })
  model: string;

  @Prop({ required: true, default: 0 })
  price: number;

  @Prop({ default: false })
  inStock: boolean;

  @Prop({ type: mongoose.Schema.Types.Array, default: [] })
  previousOwners: string[];
}

export type CarDocument = HydratedDocument<Car>;

export const CarSchema = SchemaFactory.createForClass(Car);
