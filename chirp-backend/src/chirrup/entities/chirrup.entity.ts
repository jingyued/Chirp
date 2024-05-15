import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


//创建 schema，然后用 @Prop 声明属性
@Schema()
export class Chirrup {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop([String])
    tags: string[];
}

export type ChirrupDocument = HydratedDocument<Chirrup>;

export const ChirrupSchema = SchemaFactory.createForClass(Chirrup);
