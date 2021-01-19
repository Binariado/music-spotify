import {
  ERROR,
} from './error.types';

export const SET_ERROR = (payload) => {
  return {
    payload,
    type: ERROR
  };
};

export function clearErros() {
  return (dispatch, getState) => {
    dispatch(SET_ERROR({error:{}}));
  };
}