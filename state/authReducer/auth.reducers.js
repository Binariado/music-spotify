import {
  AUTHENTICATED,
  INCREMENT_COUNTER
} from './auth.types';

const INITIAL_STATE = {
  count: 0,
  isAuthenticated: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      
      return {
        ...action.payload
      };
    case INCREMENT_COUNTER:
      return {
        ...state, 
        count: state.count + 1,
      };
    default: return state;
  }
};

export default reducer;