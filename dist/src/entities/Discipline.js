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
var Period_1 = __importDefault(require("./Period"));
var Professor_1 = __importDefault(require("./Professor"));
var Discipline = /** @class */ (function () {
    function Discipline() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Discipline.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Discipline.prototype, "name");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Period_1["default"]; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'id_period' }),
        __metadata("design:type", Period_1["default"])
    ], Discipline.prototype, "period");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return Professor_1["default"]; }, function (professor) { return professor.id; }),
        (0, typeorm_1.JoinTable)({
            name: 'professor_discipline',
            joinColumn: {
                name: 'id_discipline',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'id_professor',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], Discipline.prototype, "professors");
    Discipline = __decorate([
        (0, typeorm_1.Entity)('disciplines')
    ], Discipline);
    return Discipline;
}());
exports["default"] = Discipline;
