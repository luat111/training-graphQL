import { Author } from "./type";
import { AuthorModel } from "./model";
import { FuncResponse } from "../../interfaces"; 

export const getAuthor = async (id: string | number): Promise<FuncResponse<Author>> => {
    const author = await AuthorModel.findById(id).populate('books');

    if (!author) return null;

    return author;
}

export const getAuthors = async (): Promise<FuncResponse<Author>> => {
    try {
        const authors = await AuthorModel.find().populate('books');        
        
        return authors;
    } catch (err) {
        return null;
    }
}

export const createAuthor = async (input: Author): Promise<FuncResponse<Author>> => {
    try {
        const author = new AuthorModel(input);
        await author.save();

        return author;
    } catch (err) {
        return null;
    }
}