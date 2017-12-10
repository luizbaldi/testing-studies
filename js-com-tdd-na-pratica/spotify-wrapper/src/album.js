export const getAlbum = (url) =>
  fetch(`https://api.spotify.com/v1/albums/${url}`)
    .then(data => data.json());
export const getAlbumTracks = (url) =>
  fetch(`https://api.spotify.com/v1/albums/${url}/tracks`)
    .then(data => data.json());
