import { API_URL, HEADERS } from './config';
import { toJson } from './util';

const getAlbum = (url) =>
  fetch(`${API_URL}/albums/${url}`, HEADERS).then(toJson);
const getAlbumTracks = (url) =>
  fetch(`${API_URL}/albums/${url}/tracks`, HEADERS).then(toJson);

export { getAlbum, getAlbumTracks }
