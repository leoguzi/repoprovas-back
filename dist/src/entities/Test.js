"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Category_1 = __importDefault(require("./Category"));
var Professor_1 = __importDefault(require("./Professor"));
var Discipline_1 = __importDefault(require("./Discipline"));
var Test = /** @class */ (function () {
    function Test() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Test.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Test.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Test.prototype, "link");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Category_1["default"]; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_category' }),
        __metadata("design:type", Category_1["default"])
    ], Test.prototype, "category");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Professor_1["default"]; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_professor' }),
        __metadata("design:type", Professor_1["default"])
    ], Test.prototype, "professor");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Discipline_1["default"]; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_discipline' }),
        __metadata("design:type", Discipline_1["default"])
    ], Test.prototype, "discipline");
    Test = __decorate([
        (0, typeorm_1.Entity)('tests')
    ], Test);
    return Test;
}());
exports["default"] = Test;
