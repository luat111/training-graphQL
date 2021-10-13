import { Schema, model, Model } from "mongoose";
import { Book } from "../book/type";

interface AuthorDoc extends Document {
    id: string,
    name: string,
    books: Book[]
}

const AuthorSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    books: {
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }
})

export const AuthorModel: Model<AuthorDoc> = model('Author', AuthorSchema);
