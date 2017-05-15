import { GET_DATA, SET_IS_LOADING, SET_TEXT, CLEAR_SEARCH, SET_RESOURCE_TYPES } from './constants';
import { iTunesSearch, spotifySearch } from './services/searchService';

export function fetchSearch(searchQuery, searchParams) {
  return (dispatch) => {
    dispatch({ 
      type: SET_IS_LOADING,
      payload: {
        isLoading: true
      }
    });
    Promise.all([iTunesSearch(searchQuery, searchParams), spotifySearch(searchQuery, searchParams)])
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

export function setResourceType(resource) {
  return {
    type: SET_RESOURCE_TYPES,
    payload: {
      resourceType: {
        name: resource.name,
        isActive: resource.isActive
      }
    }
  }
}

export function clearSearch() {
  return {
    type: CLEAR_SEARCH
  }
}
