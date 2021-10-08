"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMutation = void 0;
var graphql_1 = require("graphql");
var type_1 = require("./type");
var resolver_1 = require("./resolver");
var CreateBook = {
    type: type_1.BookType,
    args: {
        body: {
            type: type_1.BookInput,
        }
    },
    resolve: function (_, args) {
        var body = args.body;
        var book = (0, resolver_1.createBook)(body);
        return book;
    },
};
exports.BookMutation = new graphql_1.GraphQLObjectType({
    name: 'BookMutation',
    fields: {
        createBook: CreateBook
    }
});
