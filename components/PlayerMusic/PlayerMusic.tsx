import React, { ReactNode } from 'react'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import RepeatIcon from '@material-ui/icons/Repeat';
import { IconButton, Tooltip, Slider } from '@material-ui/core'
import styled from 'styled-components'
import PlayerControls from './PlayerControls';

// PlayerMusic

const PlayerMusic = styled.div`
`

const Avatar = styled.div.attrs(props => ({
  size: `${props.size}` || "5rem",
}))`
  height: ${props => props.size};
  width: ${props => props.size};
  position: relative;
  .hole{
    height: calc(100% / 6);
    width: calc(100% / 6);
    position: absolute;
  }
`

const CardDisc = styled.div`

`

const PlayerMusicComponent = ({ }) => (
  <div className=" bg-white">
    <PlayerMusic className="container mx-auto p-2 flex items-center justify-around">
      <CardDisc className="flex items-center mx-3">
        <Avatar
          size="4rem"
          className="flex items-center justify-center">
          <div className="hole bg-white rounded-full "></div>
          <img className="rounded-full" alt="" src="https://i.pinimg.com/originals/da/18/3e/da183e46c3de1eaefa4f6705ca9a50dd.jpg"></img>
        </Avatar>
        <div className="flex flex-col mx-2.5">
          <p className="text-title text-base uppercase">Insecure</p>
          <span className="text-secondary text-sm capitalize">Love in air</span>
        </div>
      </CardDisc>

      <PlayerControls />

    </PlayerMusic>
  </div>

);

export default PlayerMusicComponent