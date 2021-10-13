import { GraphQLObjectType, GraphQLSchema } from "graphql"

import Book from "./book";
import Author from './author';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        book: {
            type: Book.BookQuery,
            resolve: () => { return {} }
        },
        author: {
            type: Author.AuthorQuery,
            resolve: () => { return {} }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        book: {
            type: Book.BookMutation,
            resolve: () => { return {} }
        },
        author: {
            type: Author.AuthorMutation,
            resolve: () => { return {} }
        }
    }
})

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})