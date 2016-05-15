System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Coordinate;
    return {
        setters:[],
        execute: function() {
            Coordinate = (function () {
                function Coordinate(x, y) {
                    this.x = x;
                    this.y = y;
                }
                return Coordinate;
            }());
            exports_1("Coordinate", Coordinate);
        }
    }
});
