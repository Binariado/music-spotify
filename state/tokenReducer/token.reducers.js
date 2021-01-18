import {
  GET_TOKEN
} from './token.types';

const INITIAL_STATE = {
  token: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        token: action.payload,
      };
    default: return state;
  }
};

export default reducer;