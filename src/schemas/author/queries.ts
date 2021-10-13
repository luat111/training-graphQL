import { GraphQLFieldConfig, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";

import { Author, AuthorType } from "./type";
import { getAuthor, getAuthors } from "./resolver";

const GetAuthor: GraphQLFieldConfig<Author, unknown> = {
    type: AuthorType,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLID),
        }
    },
    resolve: (_, args) => {
        const { id } = args;
        return getAuthor(id)
    },
}

const GetAuthors: GraphQLFieldConfig<Author, unknown> = {
    type: new GraphQLList(AuthorType),
    resolve: () => {
        return getAuthors()
    },
}

export const AuthorQuery = new GraphQLObjectType({
    name: 'AuthorQuery',
    fields: {
        getAuthor: GetAuthor,
        getAuthors: GetAuthors
    }
})