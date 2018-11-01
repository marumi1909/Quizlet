'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var asd = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log("Hello");

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function asd(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _graphql = require('graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _models = require('./models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _models.connectToMongoDB)();

var app = (0, _express2.default)();

app.use((0, _helmet2.default)());
app.use((0, _compression2.default)());
app.use((0, _morgan2.default)());
app.use('/graphql', (0, _expressGraphql2.default)({
    schema: _graphql2.default,
    graphiql: true,
    pretty: true
}));

asd();

app.listen(process.env.PORT, function (err) {
    err ? console.log(err) : console.log('Server is opening at port ' + process.env.PORT + ' \uD83C\uDF6D \uD83C\uDF6D \uD83C\uDF6D ');
});