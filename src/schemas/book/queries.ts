import { GraphQLFieldConfig, GraphQLID, GraphQLNonNull, GraphQLObjectType } from "graphql";

import { BookType } from "./type";
import { getBook } from "./resolver";

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

export const BookQuery = new GraphQLObjectType({
    name: 'BookQuery',
    fields: {
        getBook: GetBook
    }
})