import spotify from './spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

/* Creating elements and fetching data using api */
const albums = spotify.search.albums('Bon+Iver');
const albumListEl = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfoEl = document.getElementById('album-info');

const tracks = spotify.album.getTracks('6peEdPVO73WtgGah5sEhX4');
const albumTracksEl = document.getElementById('album-tracks');

/* Rendering data */
albums.then(data => renderAlbums(data.albums.items, albumListEl));
album.then(data => renderAlbumInfo(data, albumInfoEl));
tracks.then(data => renderAlbumTracks(data.items, albumTracksEl));
