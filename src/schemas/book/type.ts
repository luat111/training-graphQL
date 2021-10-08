import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export type Book = {
    id?: string | number,
    name: string,
}

export const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) }
    }),
})


export const BookInput = new GraphQLInputObjectType({
    name: 'BookInput',
    fields: {
        name: {
            type: GraphQLNonNull(GraphQLString),
        },
    }
})
