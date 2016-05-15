System.register(['../../model/coordinate'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var coordinate_1;
    var WorldHelper;
    return {
        setters:[
            function (coordinate_1_1) {
                coordinate_1 = coordinate_1_1;
            }],
        execute: function() {
            WorldHelper = (function () {
                function WorldHelper() {
                }
                WorldHelper.generateVillagesCoords = function (repos) {
                    var coordinates = new Array(repos.length);
                    WorldHelper.rotationRadius = 1;
                    var direction = 0;
                    var currentX = 0;
                    var currentY = 0;
                    var stepPadding = 1;
                    repos.forEach(function (item, index) {
                        stepPadding += 1;
                        var step = Math.round(Math.random() * 10 + stepPadding);
                        for (var i = 0; i < step; i++) {
                            switch (direction) {
                                case 0:
                                    currentY++;
                                    if (currentY == WorldHelper.rotationRadius) {
                                        direction = 1;
                                    }
                                    break;
                                case 1:
                                    currentX++;
                                    if (currentX == WorldHelper.rotationRadius) {
                                        direction = 2;
                                    }
                                    break;
                                case 2:
                                    currentY--;
                                    if (Math.abs(currentY) == WorldHelper.rotationRadius) {
                                        direction = 3;
                                    }
                                    break;
                                case 3:
                                    currentX--;
                                    if (Math.abs(currentX) == WorldHelper.rotationRadius) {
                                        direction = 0;
                                        WorldHelper.rotationRadius++;
                                    }
                                    break;
                            }
                        }
                        coordinates[index] = new coordinate_1.Coordinate(currentX, currentY);
                    });
                    return coordinates;
                };
                WorldHelper.generateLakesCoords = function (coords) {
                    var coordinates = [];
                    var rotationRadius = 1;
                    var direction = 0;
                    var currentX = 0;
                    var currentY = 0;
                    var diameter = 15 + 2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) * 15;
                    var stepPadding = 1;
                    var _loop_1 = function(i) {
                        stepPadding += 4;
                        var step = Math.round(Math.random() * 10 + stepPadding);
                        for (var i_1 = 0; i_1 < step; i_1++) {
                            switch (direction) {
                                case 0:
                                    currentY++;
                                    if (currentY == rotationRadius) {
                                        direction = 1;
                                    }
                                    break;
                                case 1:
                                    currentX++;
                                    if (currentX == rotationRadius) {
                                        direction = 2;
                                    }
                                    break;
                                case 2:
                                    currentY--;
                                    if (Math.abs(currentY) == rotationRadius) {
                                        direction = 3;
                                    }
                                    break;
                                case 3:
                                    currentX--;
                                    if (Math.abs(currentX) == rotationRadius) {
                                        direction = 0;
                                        rotationRadius += 2;
                                    }
                                    break;
                            }
                        }
                        var overlap = false;
                        coords.forEach(function (coord) {
                            if ((coord.x == currentX && coord.y == currentY)
                                || (coord.x == currentX && coord.y == (currentY - 1))
                                || (coord.x == (currentX - 1) && coord.y == currentY)
                                || (coord.x == (currentX - 1) && coord.y == (currentY - 1))) {
                                overlap = true;
                            }
                        });
                        if (!overlap) {
                            coordinates.push(new coordinate_1.Coordinate(currentX, currentY));
                        }
                    };
                    for (var i = 0; i < diameter; i++) {
                        _loop_1(i);
                    }
                    return coordinates;
                };
                WorldHelper.generateForestsCoordinates = function (coords, bigCoords) {
                    var coordinates = [];
                    var rotationRadius = 1;
                    var direction = 0;
                    var currentX = 0;
                    var currentY = 0;
                    var diameter = 15 + 2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) * 15;
                    var stepPadding = 1;
                    var _loop_2 = function(i) {
                        stepPadding += 2;
                        var step = Math.round(Math.random() * 10 + stepPadding);
                        for (var i_2 = 0; i_2 < step; i_2++) {
                            switch (direction) {
                                case 0:
                                    currentY++;
                                    if (currentY == rotationRadius) {
                                        direction = 1;
                                    }
                                    break;
                                case 1:
                                    currentX++;
                                    if (currentX == rotationRadius) {
                                        direction = 2;
                                    }
                                    break;
                                case 2:
                                    currentY--;
                                    if (Math.abs(currentY) == rotationRadius) {
                                        direction = 3;
                                    }
                                    break;
                                case 3:
                                    currentX--;
                                    if (Math.abs(currentX) == rotationRadius) {
                                        direction = 0;
                                        rotationRadius += 3;
                                    }
                                    break;
                            }
                        }
                        var overlap = false;
                        coords.forEach(function (coord) {
                            if (coord.x <= currentX && coord.x >= currentX - 2 && coord.y <= currentY && coord.y >= currentY - 1) {
                                overlap = true;
                            }
                        });
                        bigCoords.forEach(function (coord) {
                            if (coord.x <= currentX + 2 && coord.x >= currentX - 1 && coord.y <= currentY + 1 && coord.y >= currentY - 1) {
                                overlap = true;
                            }
                        });
                        if (!overlap) {
                            coordinates.push(new coordinate_1.Coordinate(currentX, currentY));
                        }
                    };
                    for (var i = 0; i < diameter; i++) {
                        _loop_2(i);
                    }
                    return coordinates;
                };
                WorldHelper.generateTreesCoordinates = function (smallCoords, coords, bigCoords) {
                    var coordinates = [];
                    var rotationRadius = 1;
                    var direction = 0;
                    var currentX = 0;
                    var currentY = 0;
                    var diameter = 15 + 2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) * 15;
                    var stepPadding = 1;
                    var _loop_3 = function(i) {
                        stepPadding += 1;
                        var step = Math.round(Math.random() * 5);
                        for (var i_3 = 0; i_3 < step; i_3++) {
                            switch (direction) {
                                case 0:
                                    currentY++;
                                    if (currentY == rotationRadius) {
                                        direction = 1;
                                    }
                                    break;
                                case 1:
                                    currentX++;
                                    if (currentX == rotationRadius) {
                                        direction = 2;
                                    }
                                    break;
                                case 2:
                                    currentY--;
                                    if (Math.abs(currentY) == rotationRadius) {
                                        direction = 3;
                                    }
                                    break;
                                case 3:
                                    currentX--;
                                    if (Math.abs(currentX) == rotationRadius) {
                                        direction = 0;
                                        rotationRadius += 3;
                                    }
                                    break;
                            }
                        }
                        var overlap = false;
                        smallCoords.forEach(function (coord) {
                            if (coord.x == currentX && coord.y == currentY) {
                                overlap = true;
                            }
                        });
                        coords.forEach(function (coord) {
                            if (coord.x <= currentX + 1 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
                                overlap = true;
                            }
                        });
                        bigCoords.forEach(function (coord) {
                            if (coord.x <= currentX + 2 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
                                overlap = true;
                            }
                        });
                        if (!overlap) {
                            coordinates.push(new coordinate_1.Coordinate(currentX, currentY));
                        }
                    };
                    for (var i = 0; i < diameter * 5; i++) {
                        _loop_3(i);
                    }
                    return coordinates;
                };
                WorldHelper.generateStonesCoordinates = function (smallCoords, coords, bigCoords, smallCoords1) {
                    var coordinates = [];
                    var rotationRadius = 1;
                    var direction = 0;
                    var currentX = 0;
                    var currentY = 0;
                    var diameter = 15 + 2 * Math.floor((WorldHelper.rotationRadius + 7) / 15) * 15;
                    var stepPadding = 1;
                    var _loop_4 = function(i) {
                        stepPadding += 1;
                        var step = Math.round(Math.random() * 5);
                        for (var i_4 = 0; i_4 < step; i_4++) {
                            switch (direction) {
                                case 0:
                                    currentY++;
                                    if (currentY == rotationRadius) {
                                        direction = 1;
                                    }
                                    break;
                                case 1:
                                    currentX++;
                                    if (currentX == rotationRadius) {
                                        direction = 2;
                                    }
                                    break;
                                case 2:
                                    currentY--;
                                    if (Math.abs(currentY) == rotationRadius) {
                                        direction = 3;
                                    }
                                    break;
                                case 3:
                                    currentX--;
                                    if (Math.abs(currentX) == rotationRadius) {
                                        direction = 0;
                                        rotationRadius += 3;
                                    }
                                    break;
                            }
                        }
                        var overlap = false;
                        smallCoords.forEach(function (coord) {
                            if (coord.x == currentX && coord.y == currentY) {
                                overlap = true;
                            }
                        });
                        smallCoords1.forEach(function (coord) {
                            if (coord.x == currentX && coord.y == currentY) {
                                overlap = true;
                            }
                        });
                        coords.forEach(function (coord) {
                            if (coord.x <= currentX + 1 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
                                overlap = true;
                            }
                        });
                        bigCoords.forEach(function (coord) {
                            if (coord.x <= currentX + 2 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
                                overlap = true;
                            }
                        });
                        if (!overlap) {
                            coordinates.push(new coordinate_1.Coordinate(currentX, currentY));
                        }
                    };
                    for (var i = 0; i < diameter * 5; i++) {
                        _loop_4(i);
                    }
                    return coordinates;
                };
                return WorldHelper;
            }());
            exports_1("WorldHelper", WorldHelper);
        }
    }
});
