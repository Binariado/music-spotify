import {
  SELECTPLAYER,
} from './player.types';

export const selectPlayer = (payload) => {
  return {
    payload,
    type: SELECTPLAYER
  };
};
