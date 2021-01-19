import { useState, useEffect, } from "react";
import { setInterval, clearInterval, setTimeout, clearTimeout } from 'timers'
import { useDebounce } from './index'

let timeout;
let countIni = 0;
let waitIni = 100;

type PorpsState = {
  src?: string,
}

async function addPro(state: PorpsState, auco = null) {
  const au = auco ? auco : new Audio();

  if (!state.src) {
    return await au;
  }

  for (const key in state) {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      const element = state[key];
      au[key] = element;
    }
  }
  return await au;
}

const usePlayMusic = (state: object) => {

  const [values, setValues] = useState(state);
  const [player, setPlayer] = useState(false);
  const [audio, setAudio] = useState(addPro(state));

  const [statePlayer, setStatePlayer] = useState({
    currentTime: 0,
    ended: false,
    readyState: 0,
    duration: 0,
    played: Object,
    loading: null
  });

  const [executedFunction, cancelDebounce] = useDebounce({
    callback: (p, f, c) => {
      countIni++;
      const initState = {
        currentTime: p.currentTime,
        ended: p.ended,
        readyState: p.readyState,
        duration: !p.duration ? 0 : p.duration,
        played: p.played,
        loading: true,
      }

      const src = p.currentSrc.toString().trim();

      if ((p.readyState < 4 || !p.duration) && src !== '') {
        setStatePlayer(initState);
        f(p, f, c);
      } else if (src !== '') {
        setStatePlayer({
          ...initState,
          loading: false,
        });
        c();
      }

      if (countIni >= waitIni || src === '') {
        countIni = 100;
        c();
      }
    }, wait: 500
  });

  useEffect(() => {
    if (statePlayer.loading === null) {
      audio
        .then((p) => {
          executedFunction(p, executedFunction, cancelDebounce);
        })
    }
  })

  const _paused = () => {
    return new Promise((resolve, reject) => {
      try {
        audio
          .then((p) => {
            if (statePlayer.readyState) p.pause();
          })
          .then(() => resolve({ ft: false }));
      } catch (error) {
      }
    });
  }

  const paused = () => {
    _paused()
      .then(function ({ ft }) {
        if (timeout) {
          clearInterval(timeout);
        }
        setPlayer(ft);
      })
  }

  const _play = () => {
    return new Promise((resolve, reject) => {
      try {
        audio
          .then((p) =>{ 
            if (statePlayer.readyState) p.play();
          })
          .then(() => resolve({ ft: true }));
      } catch (error) {
      }
    });
  }

  const play = () => {
    _play()
      .then(function ({ ft }) {
        audio
          .then((p) => {
            if (statePlayer.readyState) {
              setPlayer(ft);
              const audioState = () => {
                setStatePlayer({
                  currentTime: p.currentTime,
                  ended: p.ended,
                  readyState: p.readyState,
                  duration: !p.duration ? 0 : p.duration,
                  played: p.played,
                  loading: false,
                });
                // if(p.ended && player){
                //   setPlayer(false);
                //   clearInterval(timeout);
                // }
              };
              timeout = setInterval(audioState, 1)
            }
          })
      })
  }

  const setTrack = async (src) => {
    try {
      audio
        .then((p) => {
          if (p.readyState) {
            paused();
            setTimeout(() => {
              p.src = src.src;
              p.currentTime = 0;
              play();
            }, 500);
          }
        });

    } catch (error) {

    }
  }

  const initTrack = async (st) => {
    try {
      setAudio(addPro(st ? st : state, audio));
    } catch (error) {

    }
  }

  return { audio, paused, play, player, setTrack, statePlayer, initTrack };
}

export default usePlayMusic;