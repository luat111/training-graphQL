"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
var mongoose_1 = require("mongoose");
var BookSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
});
exports.BookModel = (0, mongoose_1.model)('Book', BookSchema);
