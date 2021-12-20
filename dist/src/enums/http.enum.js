"use strict";
exports.__esModule = true;
exports.HttpStatusText = exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["FORBIDEN"] = 403] = "FORBIDEN";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
var HttpStatusText;
(function (HttpStatusText) {
    HttpStatusText["OK"] = "ok";
    HttpStatusText["CREATED"] = "created";
    HttpStatusText["FORBIDEN"] = "forbiden";
    HttpStatusText["BAD_REQUEST"] = "bad request";
    HttpStatusText["NOT_FOUND"] = "not found";
})(HttpStatusText = exports.HttpStatusText || (exports.HttpStatusText = {}));
