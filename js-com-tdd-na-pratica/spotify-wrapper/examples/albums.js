global.fetch = require('node-fetch');

import { searchAlbums } from '../src/main';

const albums = searchAlbums('Bon+Iver');

albums.then(data => console.log(data));
