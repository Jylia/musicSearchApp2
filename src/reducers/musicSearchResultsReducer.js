import { GET_DATA, SET_IS_LOADING, CLEAR_SEARCH } from '../constants';

const initialMusicSearchResultsState = {
  searchResults: null,
  isLoading: false
};

export default function musicSearchResultsReducer (state = initialMusicSearchResultsState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        isLoading: false,
        searchResults: action.payload.entities
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      };
    case CLEAR_SEARCH:
      return initialMusicSearchResultsState;
    default:
      return state;
  }
}
