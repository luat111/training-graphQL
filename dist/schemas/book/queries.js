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
exports.BookQuery = new graphql_1.GraphQLObjectType({
    name: 'BookQuery',
    fields: {
        getBook: GetBook
    }
});
