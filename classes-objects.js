"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
        this.legs = 4;
    }
    Animal.prototype.run = function () {
        this.legs = this.legs + 1;
        console.log('Running ' + this.legs);
    };
    return Animal;
}());
exports.Animal = Animal;
var an = new Animal();
an.run();
