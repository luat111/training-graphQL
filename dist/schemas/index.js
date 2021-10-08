"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var book_1 = __importDefault(require("./book"));
var Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        book: {
            type: book_1.default.BookQuery,
            resolve: function () { return {}; }
        },
    }
});
var Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        book: {
            type: book_1.default.BookMutation,
            resolve: function () { return {}; }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
