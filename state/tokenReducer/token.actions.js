import {
  GET_TOKEN,
} from './token.types';
import { useApiRest } from '../../helpers';
import {SET_ERROR} from '../errorReducer/error.actions'

export const get_token = (payload) => {
  return {
    payload,
    type: GET_TOKEN
  };
};

export function getTokenAsync() {
  return (dispatch) => {
    dispatch(get_token(null));
    const { getToken } = useApiRest("getToken");

    setTimeout(() => {
      async function _token() {
        try {
          const resp = await getToken();
          if(resp){
            const { errors } = resp;
            if (!errors) {
              const { access_token } = resp;
              dispatch(get_token(access_token));
            }
            return
          }
          dispatch(SET_ERROR({
            errorSearch: {
              title: "Oh!",
              description: "Es posible que se tu conexión a internet",
              src: "/images/404.jpg"
            }
          }))
          
        } catch (error) {
          console.log("error access_token");
        }
      }
      _token();
    }, 100);
  };
}