import { Book } from "./type";

export const getBook = async (id: string | number): Promise<Book> => {
    console.log(id);

    return {
        id: 1,
        name: "book1"
    } as Book;
}

export const createBook = async (book: Book): Promise<Book> => {
    return book;
}