'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var _importGraphql = require('import-graphql');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _RootResolver = require('./RootResolver');

var _RootResolver2 = _interopRequireDefault(_RootResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = (0, _importGraphql.importSchema)(_path2.default.join(__dirname, 'TypeDefs.graphql'));

exports.default = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: typeDefs,
    resolvers: _RootResolver2.default
});