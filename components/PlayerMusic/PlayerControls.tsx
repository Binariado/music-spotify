import React, { ReactElement } from 'react'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import RepeatIcon from '@material-ui/icons/Repeat';
import { IconButton, Tooltip, Slider } from '@material-ui/core'
import styled from 'styled-components'

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
`

type PropsTolip = {
  children?: ReactElement,
  open?: boolean,
  value?: String,
  className?: string
}

const ValueLabelComponent = ({ children, open, value, className }: PropsTolip) => {

  return (
    <Tooltip className={className} open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PlayerControls = styled.div`
`;


const PlayerControlsComponent = ({ }) => (
  <PlayerControls className="flex items-center flex-grow justify-around ">
    <div className="flex items-center">
      <IconButton
        aria-label="previous"
        className="flex items-center justify-center">
        <ArrowBackIosIcon className="text-secondary" />
      </IconButton>
      <IconButton aria-label="play/pause">
        <PauseCircleFilledIcon fontSize="large" className="text-colorPlayer" />
      </IconButton>
      <IconButton
        aria-label="next"
        className="flex items-center justify-center">
        <ArrowForwardIosIcon className="text-secondary" />
      </IconButton>
    </div>

    <div className="flex items-center flex-grow md:px-20">
      <p className="text-secondary text-sm whitespace-nowrap ">1:15</p>
      <TimeSlider
        ValueLabelComponent={(props) => {
          return <ValueLabelComponent {...props} />;
        }}
        aria-label="custom thumb label"
        className="mx-3"
        defaultValue={20} />
      <p className="text-secondary text-sm whitespace-nowrap ">5:00</p>
    </div>

    <div className="mx-3">
      <IconButton>
        <RepeatIcon className="text-colorPlayer" />
      </IconButton>
    </div>
  </PlayerControls>
);

export default PlayerControlsComponent