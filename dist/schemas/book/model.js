"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var BookSchema = new mongoose_1.Schema({
    name: { type: String },
});
module.exports = (0, mongoose_1.model)('Book', BookSchema);
