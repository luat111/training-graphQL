import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import { Book, BookType } from "./type";
import { createBook } from "./resolver";

const CreateBook: GraphQLFieldConfig<Book, unknown> = {
    type: BookType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString), },
        authorId: { type: new GraphQLNonNull(GraphQLString), },
    },
    resolve: (_, args) => {
        const { name, authorId } = args;
        const book = createBook(name, authorId);

        return book;
    },
}

export const BookMutation = new GraphQLObjectType({
    name: 'BookMutation',
    fields: {
        createBook: CreateBook
    }
})