import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbums('Bon+Iver');
albums.then(data => console.log(data));
