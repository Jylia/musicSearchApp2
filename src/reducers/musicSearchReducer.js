import { getData, setIsLoading } from '../constants';

const initialMusicSearchState = {
  searchResults: null,
  isLoading: false
};

export default function musicSearchReducer (state = initialMusicSearchState, action) {
  switch (action.type) {
    case getData:
      return {
        isLoading: action.payload.isLoading,
        searchResults: action.payload.entities
      };
    case setIsLoading:
      return {
        ...state,
        isLoading: action.payload.isLoading
      };
    default:
      return state;
  }
}
