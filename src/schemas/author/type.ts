import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { BookModel } from "../book/model";
import { Book, BookType } from "../book/type";

export type Author = {
    id?: string | number,
    name: string,
    books: Book[]
}

export const AuthorType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return BookModel.find({ authorId: author.id });
            }
        }
    }),
})


export const AuthorInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: 'AuthorInput',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }
})
