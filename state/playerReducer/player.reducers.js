import {
  SELECTPLAYER,
} from './player.types';

const INITIAL_STATE = {
  selectPlayer: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTPLAYER:
      return {
        ...state,
        selectPlayer: action.payload
      };
    default: return state;
  }
};

export default reducer;