"use strict";
exports.__esModule = true;
exports.Point2 = void 0;
var Point2 = /** @class */ (function () {
    function Point2(_x, _y) {
        this.x = _x;
        this.y = _y;
        // ..
    }
    Point2.prototype.draw = function () {
        console.log("x: ".concat(this.x, ", y: ").concat(this.y));
    };
    return Point2;
}());
exports.Point2 = Point2;
