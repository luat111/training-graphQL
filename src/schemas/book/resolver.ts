import { Book } from "./type";
import { BookModel } from "./model";
import { FuncResponse } from "../../interfaces";

export const getBook = async (id: string | number): Promise<FuncResponse<Book>> => {
    const book = await BookModel.findById(id).populate('author');

    if (!book) return new Error('not found book');

    return book;
}

export const getBooks = async (): Promise<FuncResponse<Book>> => {
    try {
        const books = await BookModel.find().populate('author');

        return books;
    } catch (err) {
        return err;
    }
}

export const createBook = async (name: string, authorId: string): Promise<FuncResponse<Book>> => {
    try {            
        const book = new BookModel({ name, authorId });
        await book.save();

        return book;
    } catch (err) {
        return err;
    }
}