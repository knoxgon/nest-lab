import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
export class Bike {
  @Prop({ required: true })
  name: string;

  @Prop({ default: 'unknown' })
  color: 'green' | 'blue' | 'red' | 'unknown';

  @Prop({ default: false })
  inStock: boolean;

  @Prop({ type: mongoose.Schema.Types.Array, default: [] })
  previousOwners: string[];
}

export type BikeDocument = HydratedDocument<Bike>;

export const BikeSchema = SchemaFactory.createForClass(Bike);
