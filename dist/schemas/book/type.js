"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookInput = exports.BookType = void 0;
var graphql_1 = require("graphql");
exports.BookType = new graphql_1.GraphQLObjectType({
    name: 'Book',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        name: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) }
    }); },
});
exports.BookInput = new graphql_1.GraphQLInputObjectType({
    name: 'BookInput',
    fields: {
        name: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString),
        },
    }
});
