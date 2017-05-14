import { GET_DATA, SET_IS_LOADING, SET_TEXT, CLEAR_SEARCH } from './constants';
import { iTunesSearch, spotifySearch } from './services/searchService';

export function fetchSearch(searchQuery) {
  return (dispatch) => {
    dispatch({ 
      type: SET_IS_LOADING,
      payload: {
        isLoading: true
      }
    });
    Promise.all([iTunesSearch(searchQuery), spotifySearch(searchQuery)])
      .then((values) => {
        dispatch({
          type: GET_DATA,
          payload: {
            entities: values[0].concat(values[1])
          }
        })
      })
      .catch(reason => { 
        console.log(reason)
      });
  }
}

export function setSearchText(text) {
  return {
    type: SET_TEXT,
    payload: {
      text: text
    }
  };
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH
  }
}
