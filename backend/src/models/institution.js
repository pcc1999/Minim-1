"use strict";
exports.__esModule = true;
exports.institutionSchema = void 0;
var mongoose_1 = require("mongoose");
exports.institutionSchema = new mongoose_1.Schema({
    name: [{ type: String, required: true }],
    description: [{ type: String }],
    url: [{ type: String }],
    responsable: [{ type: String, required: true }]
});
exports["default"] = mongoose_1.model('Institution', exports.institutionSchema);
