System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Coordinate;
    return {
        setters:[],
        execute: function() {
            class Coordinate {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                }
            }
            exports_1("Coordinate", Coordinate);
        }
    }
});
