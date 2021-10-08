import { GraphQLFieldConfig, GraphQLObjectType } from "graphql";

import { BookInput, BookType } from "./type";
import { createBook } from "./resolver";

const CreateBook: GraphQLFieldConfig<unknown, unknown> = {
    type: BookType,
    args: {
        body: {
            type: BookInput,
        }
    },
    resolve: (_, args) => {
        const { body } = args;
        const book = createBook(body);

        return book;
    },
}

export const BookMutation = new GraphQLObjectType({
    name: 'BookMutation',
    fields: {
        createBook: CreateBook
    }
})