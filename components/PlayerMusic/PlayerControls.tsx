import React, { useEffect, useState, ReactElement, ReactText } from 'react'
import { useAudioPlayer } from "react-use-audio-player"
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import RepeatIcon from '@material-ui/icons/Repeat';
import { IconButton, Tooltip, Slider, useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'
import { usePlayMusic } from '../../hooks'
import { setInterval } from 'timers'


const TimeSlider = styled(Slider)`
  .MuiSlider-rail{
    background-color: #ECECEC !important;
   
  }
  .MuiSlider-track{
    color: #2BB954 !important;
    
  }
  .MuiSlider-thumb{
    background-color: #2BB954 !important;
    
  }
  .MuiSlider-thumb::after{
    
  }
`

type PropsTolip = {
  children?: ReactElement,
  open?: boolean,
  value?: number | string | ReactText,
  className?: string,
  currentTime?: number
}

const ValueLabelComponent = ({ children, open, value, className, currentTime }: PropsTolip) => {
  return (
    <Tooltip className={className} open={open} enterTouchDelay={0} placement="top" title={currentTime}>
      {children}
    </Tooltip>
  );
}

const PlayerControls = styled.div`
`;



const PlayerControlsComponent = ({ music }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const [initState, setInitState] = useState(false);

  const {
    audio,
    paused,
    play,
    player,
    setTrack,
    statePlayer,
    initTrack
  } = usePlayMusic({
    src: music.preview_url,
    controls: true,
  });

  const handleChangeSlider = (props, newValue) => {
    audio.then((p) => {
      p.currentTime = newValue;
    });
  }

  useEffect(() => {
    if (music.preview_url && statePlayer.readyState >= 3) {
      console.log("set")
      setInitState(true);
      setTrack({
        src: music.preview_url,
        controls: true,
      });
    }
    if (!initState && music.preview_url && statePlayer.readyState === 0) {
      console.log("init")
      setInitState(true);
      initTrack({
        src: music.preview_url,
        controls: true,
      });
    }
  }, [music, initState]);

  //console.log(statePlayer);

  return (
    <PlayerControls
      className={`flex items-center flex-grow justify-around ${matches ? ' w-full' : ''}`}>

      <div className="flex items-center">
        {/* <IconButton
          aria-label="previous"
          className="flex items-center justify-center">
          <ArrowBackIosIcon className="text-secondary" />
        </IconButton> */}
        <IconButton onClick={!player ? play : paused} aria-label="play/pause">
          {!player ? (
            <PlayCircleFilledIcon
              fontSize="large"
              className="text-colorPlayer" />
          ) : (
              <PauseCircleFilledIcon
                fontSize="large"
                className="text-colorPlayer" />
            )}

        </IconButton>
        {/* <IconButton
          aria-label="next"
          className="flex items-center justify-center">
          <ArrowForwardIosIcon className="text-secondary" />
        </IconButton> */}
      </div>

      <div className="flex items-center flex-grow md:px-10">
        <p className="text-secondary text-sm whitespace-nowrap w-28">
          {statePlayer.currentTime}
        </p>
        <TimeSlider
          ValueLabelComponent={(props) => {
            return <ValueLabelComponent currentTime={statePlayer.currentTime} {...props} />;
          }}
          aria-label="custom thumb label"
          className="mx-3"
          onChange={handleChangeSlider}
          value={statePlayer.currentTime / statePlayer.duration * 100}
          defaultValue={statePlayer.currentTime} />
        <p className="text-secondary text-sm whitespace-nowrap w-28">
          {statePlayer.duration ? statePlayer.duration : ''}
        </p>
      </div>

      <div className="mx-3">
        <IconButton>
          <RepeatIcon className="text-colorPlayer" />
        </IconButton>
      </div>
    </PlayerControls>
  )
};

export default PlayerControlsComponent