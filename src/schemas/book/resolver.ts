import { Book } from "./type";
import { BookModel } from "./model";
import { FuncResponse } from "../../interfaces"; 

export const getBook = async (id: string | number): Promise<FuncResponse<Book>> => {
    const book = await BookModel.findById(id);

    if (!book) return null;

    return book;
}

export const getBooks = async (): Promise<FuncResponse<Book>> => {
    try {
        const books = await BookModel.find();

        return books;
    } catch (err) {
        return null;
    }
}

export const createBook = async (input: Book): Promise<FuncResponse<Book>> => {
    try {
        const book = new BookModel(input);
        await book.save();

        return book;
    } catch (err) {
        return null;
    }
}