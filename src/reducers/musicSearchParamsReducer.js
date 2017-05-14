import { SET_TEXT, CLEAR_SEARCH } from '../constants';

const initialMusicSearchParamsState = {
  searchText: ''
};

export default function musicSearchResultsReducer (state = initialMusicSearchParamsState, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        searchText: action.payload.text
      };
    case CLEAR_SEARCH:
      return initialMusicSearchParamsState;
    default:
      return state;
  }
}
