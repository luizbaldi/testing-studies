'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var _util = require('./util');

var search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type).then(_util.toJson);
};
var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};
var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};
var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};
var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

exports.search = search;
exports.searchAlbums = searchAlbums;
exports.searchArtists = searchArtists;
exports.searchTracks = searchTracks;
exports.searchPlaylists = searchPlaylists;