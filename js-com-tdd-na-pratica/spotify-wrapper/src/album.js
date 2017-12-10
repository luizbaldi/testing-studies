import { API_URL } from './config';
import { toJson } from './util';

const getAlbum = (url) =>
  fetch(`${API_URL}/albums/${url}`).then(toJson);
const getAlbumTracks = (url) =>
  fetch(`${API_URL}/albums/${url}/tracks`).then(toJson);

export { getAlbum, getAlbumTracks }
