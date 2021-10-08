"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookQuery = void 0;
var graphql_1 = require("graphql");
var type_1 = require("./type");
var resolver_1 = require("./resolver");
var GetBook = {
    type: type_1.BookType,
    args: {
        id: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID),
        }
    },
    resolve: function (_, args) {
        var id = args.id;
        return (0, resolver_1.getBook)(id);
    },
};
var GetBooks = {
    type: new graphql_1.GraphQLList(type_1.BookType),
    resolve: function () {
        return (0, resolver_1.getBooks)();
    },
};
exports.BookQuery = new graphql_1.GraphQLObjectType({
    name: 'BookQuery',
    fields: {
        getBook: GetBook,
        getBooks: GetBooks
    }
});
