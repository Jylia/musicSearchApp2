import fetchJsonp from 'fetch-jsonp';

function parseJSON(response) {
  return response.json();
}

export function iTunesSearch(searchQuery) {
  let returnArray = [];
  if (!!searchQuery) {
    let searchUrl = `https://itunes.apple.com/search?term=${searchQuery}&entity=album&attribute=allArtistTerm&limit=50`;
    return fetchJsonp(searchUrl)
      .then(parseJSON)
      .then((response) => {
        if (response && response.results && response.results.length) {
          response.results.map((album) => {
            return returnArray.push({
              artistName: album.artistName,
              url: album.collectionViewUrl,
              artistUrl: album.artistViewUrl,
              albumImage: album.artworkUrl60,
              albumName: album.collectionName,
              sourceType: 'iTunes'
            });
          });
        }
        return returnArray;
      })
      .catch(function(ex) {
        console.log('parsing failed', ex);
      });
  } else {
    return returnArray;
  }
}

export function spotifySearch(searchQuery) {
  let returnArray = [];
  if (!!searchQuery) {
    let searchUrl = `https://api.spotify.com/v1/search?q=artist:${searchQuery}&type=album&limit=50`
    return fetch(searchUrl)
      .then(parseJSON)
      .then((response) => {
        if (response && response.albums && response.albums.items && response.albums.items.length) {
          response.albums.items.map((album) => {
            return returnArray.push({
              artistName: album.artists[0].name,
              url: album.external_urls.spotify,
              artistUrl: album.artists[0].external_urls.spotify,
              albumImage: album.images[album.images.length - 1].url,
              albumName: album.name,
              sourceType: 'spotify'
            });
          });
        }
        return returnArray;
      })
      .catch(function(ex) {
        console.log('parsing failed', ex);
      });
  } else {
    return returnArray;
  }
}
