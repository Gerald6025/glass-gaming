import mongoose, { Schema, Document, Model } from "mongoose";


export interface IPost2 extends Document {
title: string;
content: string;
createdAt: Date;
updatedAt: Date;
}


const Post2Schema: Schema<IPost2> = new Schema(
{
title: { type: String, required: true },
content: { type: String, required: true },
},
{ timestamps: true }
);


const Post2: Model<IPost2> = mongoose.models.Post2 || mongoose.model<IPost2>("Post2", Post2Schema);


export default Post2;

