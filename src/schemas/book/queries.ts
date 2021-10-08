import { GraphQLFieldConfig, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";

import { BookType } from "./type";
import { getBook, getBooks } from "./resolver";

const GetBook: GraphQLFieldConfig<unknown, unknown> = {
    type: BookType,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLID),
        }
    },
    resolve: (_, args) => {
        const { id } = args;
        return getBook(id)
    },
}

const GetBooks: GraphQLFieldConfig<unknown, unknown> = {
    type: new GraphQLList(BookType),   
    resolve: () => {        
        return getBooks()
    },
}

export const BookQuery = new GraphQLObjectType({
    name: 'BookQuery',
    fields: {
        getBook: GetBook,
        getBooks:GetBooks
    }
})