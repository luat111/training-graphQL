import { GraphQLFieldConfig, GraphQLObjectType } from "graphql";

import { AuthorInput, AuthorType } from "./type";
import { createAuthor } from "./resolver";

const CreateAuthor: GraphQLFieldConfig<unknown, unknown> = {
    type: AuthorType,
    args: {
        body: {
            type: AuthorInput,
        }
    },
    resolve: (_, args) => {
        const { body } = args;
        const author = createAuthor(body);

        return author;
    },
}

export const AuthorMutation = new GraphQLObjectType({
    name: 'AuthorMutation',
    fields: {
        createAuthor: CreateAuthor
    }
})