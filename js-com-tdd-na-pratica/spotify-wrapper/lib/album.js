'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbum = undefined;

var _config = require('./config');

var _util = require('./util');

var getAlbum = function getAlbum(url) {
  return fetch(_config.API_URL + '/albums/' + url).then(_util.toJson);
};
var getAlbumTracks = function getAlbumTracks(url) {
  return fetch(_config.API_URL + '/albums/' + url + '/tracks').then(_util.toJson);
};

exports.getAlbum = getAlbum;
exports.getAlbumTracks = getAlbumTracks;