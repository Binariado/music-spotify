import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { IconButton, Tooltip, Slider, useMediaQuery } from '@material-ui/core'
import { selectPlayer } from "../../state/playerReducer/player.actions";
import styled from 'styled-components'
import PlayerControls from './PlayerControls';
import _ from 'lodash'

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


const PlayerMusicComponent = (props) => {
  const dispatch = useDispatch()
  const matches = useMediaQuery('(max-width:600px)');
  const music = useSelector(state => state.music);
  const select = useSelector(state => state.player.selectPlayer);

  useEffect(() => {
    const n = music.tracks.items.length;
    const item = music.tracks.items[_.random(n)];
    if (n > 0) {
      console.log(n);
      dispatch(selectPlayer(item));
    }
  }, [])

  return (
    <div className="bg-white">
      {select && (
        <PlayerMusic className={`container mx-auto p-2 flex items-center justify-around ${matches ? ' flex-col' : ''}`}>
          <CardDisc className={`flex items-center mx-3 ${matches ? ' w-full' : ''} `}>
            <Avatar
              size="4rem"
              className="flex items-center justify-center">
              <div className="hole bg-white rounded-full "></div>
              <img
                className="rounded-full" alt=""
                src={
                  select.album ?
                    select.album.images[0].url :
                    '/images/default-album-art.png'
                }>

              </img>
            </Avatar>
            <div className={`flex flex-col mx-2.5 ${matches ? ' w-full' : ''}`}>
              <p
                className={`text-title text-base uppercase truncate ${matches ? '  w-80' : ' w-20'}`}>
                {
                  select.album ?
                    select.album.name
                    :
                    ''
                }
              </p>
              <span className={`text-secondary text-sm capitalize truncate ${matches ? '  w-80' : ' w-20'}`}>
                {
                  select.name ?
                    select.name :
                    ''
                }
              </span>
            </div>
          </CardDisc>

          <PlayerControls music={select} />
        </PlayerMusic>

      )}
    </div>
  )
};

export default PlayerMusicComponent