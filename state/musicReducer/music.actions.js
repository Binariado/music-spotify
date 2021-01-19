import {
  TRACK,
  ARTISTS,
  FEATURED,
  TRACK_ARTISTS,
  MUSICALL,
  SELECTPLAYER,
  LOADING,
} from './music.types';
import { apiRest } from "../../helpers";
import _ from 'lodash'

export const MUSIC_ALL = (payload) => {
  return {
    payload,
    type: MUSICALL
  };
};

export const loading_search = (payload) => {
  return {
    payload,
    type: LOADING
  };
};

export const selectPlayer = (payload) => {
  return {
    payload,
    type: SELECTPLAYER
  };
};

export const tract = (payload) => {
  return {
    payload,
    type: TRACK
  };
};

export const artist = (payload) => {
  return {
    payload,
    type: ARTISTS
  };
};

export const tract_artist = (payload) => {
  return {
    payload,
    type: TRACK_ARTISTS
  };
};

export const featured = (payload) => {
  return {
    payload,
    type: FEATURED
  };
};

export function clearErros() {
  return (dispatch) => {

    dispatch(SET_ERROR({ error: {} }));
  };
}

export function paginate_search(data) {
  return (dispatch, getState) => {
    dispatch(MUSIC_ALL({
      tracks: {
        items: [],
      },
      artists: {
        items: [],
      }
    }));
    const { music, token } = getState();
    try {
      const _paginate = async () => {
        dispatch(loading_search(true));
        const resp = await apiRest('paginate', {
          ...token,
          ...data,
        });
        if (resp) {
          const { errors } = resp;
          if (!errors) {

            let _tracks = {
              ...music.tracks,
              ...resp.search.tracks,
              items: music.tracks.items
            }

            if (resp.search.tracks.items) {
              _tracks.items = _tracks.items.concat(resp.search.tracks.items);
            }

            let _artists = {
              ...music.artists,
              ...resp.search.artists,
              items: music.artists.items
            }

            if (resp.search.artists.items) {
              _artists.items = _artists.items.concat(resp.search.artists.items);
            }


            dispatch(MUSIC_ALL({
              artists: _artists,
              tracks: _tracks,
              loading: false,
            }));

          }
          return
        }
        dispatch(SET_ERROR({
          errorSearch: {
            title: "Error al buscar",
            description: "Verificar tu conexión a internet o refresca el navegador",
            src: "/images/404.jpg"
          }
        }))
      }
      _paginate();
    } catch (error) {
      console.log(error);
    }
  };
}
