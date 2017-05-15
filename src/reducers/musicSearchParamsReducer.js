import { SET_TEXT, CLEAR_SEARCH, SET_RESOURCE_TYPES } from '../constants';

const initialMusicSearchParamsState = {
  searchText: '',
  spotify: true,
  iTunes: true
};

export default function musicSearchResultsReducer (state = initialMusicSearchParamsState, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        searchText: action.payload.text
      };
    case CLEAR_SEARCH:
      return initialMusicSearchParamsState;
    case SET_RESOURCE_TYPES:
      return {
        ...state,
        [action.payload.resourceType.name]: action.payload.resourceType.isActive
      }
    default:
      return state;
  }
}
