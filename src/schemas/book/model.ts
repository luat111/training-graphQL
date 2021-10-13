import { Schema, model, Model } from "mongoose";

interface BookDoc extends Document {
    id: string,
    name: string,
    authorId: string
}

const BookSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    }
})

export const BookModel: Model<BookDoc> = model('Book', BookSchema);
