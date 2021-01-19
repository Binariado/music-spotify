import {
  TRACK,
  ARTISTS,
  TRACK_ARTISTS,
  FEATURED,
  MUSICALL,
  SELECTPLAYER,
  LOADING,
} from './music.types';

const INITIAL_STATE = {
  tracks: {
    items: [],
  },
  artists: {
    items: [],
  },
  featured: [],
  selectPlayer: null,
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SELECTPLAYER:
      return {
        ...state,
        selectPlayer: action.payload
      };
    case MUSICALL:
      return {
        ...state,
        ...action.payload
      };
    case TRACK:
      return {
        ...state,
        track: action.payload
      };
    case ARTISTS:
      return {
        ...state,
        artists: action.payload
      };
    case FEATURED:
      return {
        ...state,
        featured: action.payload
      };
    case TRACK_ARTISTS:
      return {
        ...state,
        track: action.payload.track,
        artists: action.payload.track,
      };
    default: return state;
  }
};

export default reducer;