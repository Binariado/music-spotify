import {
  GET_TOKEN,
} from './token.types';
import { useApiRest } from '../../helpers';

export const get_token = (payload) => {
  return {
    payload,
    type: GET_TOKEN
  };
};

export function getTokenAsync() {
  return (dispatch, getState) => {
    dispatch(get_token(null));
    const { getToken } = useApiRest();

    setTimeout(() => {

      async function _token() {
        const resp = await getToken();
        const { errors } = resp.resp;
        if (!errors) {
          const { access_token } = resp.resp;
          dispatch(get_token(access_token));
        }
      }
      _token();
    }, 100);
  };
}