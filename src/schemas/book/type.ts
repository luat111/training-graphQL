import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { AuthorModel } from "../author/model";
import { AuthorType } from "../author/type";

export type Book = {
    id?: string | number,
    name: string,
    authorId: string
}

export const BookType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return AuthorModel.findById(book.authorId);
            }
        }
    }),
})


export const BookInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'BookInput',
    fields: {
        name: {
            type: GraphQLNonNull(GraphQLString),
        },
    }
})
