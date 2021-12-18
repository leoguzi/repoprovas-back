"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var testSchema = joi_1["default"].object({
    category: joi_1["default"].number().required(),
    name: joi_1["default"].string().required(),
    link: joi_1["default"].string().uri().required(),
    professor: joi_1["default"].number().required(),
    discipline: joi_1["default"].number().required()
});
exports["default"] = testSchema;
