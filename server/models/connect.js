"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var url = "";
    _mongoose2.default.connect(url, {
        useNewUrlParser: true
    }).catch(function (err) {
        console.log(err);
        process.exit(0);
    });
};