import { Schema, model } from "mongoose";

const BookSchema = new Schema({
    name: { type: String },
})

module.exports = model('Book', BookSchema);