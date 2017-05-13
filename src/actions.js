import { getData, setIsLoading } from './constants';
import { iTunesSearch, spotifySearch } from './services/searchService';

export function isLoading(value) {
  return (dispatch) => {
    dispatch({
      type: setIsLoading,
      payload: {
        isLoading: value
      }
    });
  }
}

export function fetchSearch(searchQuery, isLoading) {
  return (dispatch) => {
    Promise.all([iTunesSearch(searchQuery), spotifySearch(searchQuery)])
      .then((values) => {
        dispatch({
          type: getData,
          payload: {
            entities: values[0].concat(values[1]),
            isLoading: false
          }
        })
      })
      .catch(reason => { 
        console.log(reason)
      });
  }
}
