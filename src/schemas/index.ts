import { GraphQLObjectType, GraphQLSchema } from "graphql"

import Book from "./book";

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        book: {
            type: Book.BookQuery,
            resolve: () => { return {} }
        },
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        book: {
            type: Book.BookMutation,
            resolve: () => { return {} }
        }
    }
})

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})