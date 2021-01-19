import React, { useState, useEffect } from 'react'
import styled, { css } from "styled-components"
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';
import CardSearch, { titlePosition, borderStyle } from './CardMusic'
import {
  selectPlayer
} from '../state/playerReducer/player.actions'

type TitlePorps = {
  albun?: string,
  pista?: string
}

const TitleAlbum = ({ albun, pista }: TitlePorps) => {

  return (
    <div className="flex flex-col items-center mx-2.5 mt-2">
      <p className="text-title text-xl capitalize">{albun}</p>
      <span className="text-secondary text-sm capitalize">{pista}</span>
    </div>
  )
}

const GroupCollec = styled.ul`
  flex-wrap: nowrap;
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  transform: translateZ(0);
    ::-webkit-scrollbar { 
    display: none; 
  }
  display: flex;
  padding: 0;
  //flex-wrap: wrap;
  list-style: none;
  overflow-y: auto;
`;

const Halo = styled.div`
  height: calc(100% / 6);
  width: calc(100% / 6);
  position: absolute;
`

const SearchMusic = styled.div`
  column-count: 3;
  column-gap: 15px;
`

const ItemCard = styled.div`

`

const ImgCard = ({ src, name }) => {

  const [imgSrc, setImgSrc] = useState('/images/default-album-art.png');
  const Img = new Image();
  Img.src = src;
  Img.onload = () => {
    setImgSrc(src);
  }
  return (
    <img alt={name} src={imgSrc} width="" height="" />
  )
}

type PropsImg = {
  album?:{
    images?: {
      url?: object[],
    },
  },
}

const CollectionCardSearch = ({ tracks, artists, dispatch }) => {
  const { items } = tracks;

  const selectPlay = (item) => {
    dispatch(selectPlayer(item));
  }

  return (
    <SearchMusic className="p-4 flex flex-grow flex-wrap">
      {items.map((item, idx) => {
        const { album }: PropsImg = item;
        let images = false;
        if (Object.prototype.hasOwnProperty.call(album, 'images')) {
          let images = true;
        }
        return (
          <ItemCard
            onClick={() => selectPlay(item)}
            key={idx}
            className="p-4 flex-grow">
            <CardSearch
              position={titlePosition.BOTTOM}
              //borderStyle={borderStyle.ROUNDED}
              size={["10rem", "10rem"]}
              className="hover:shadow-lg cursor-pointer"
              childrenAvatar={(<>
                <ImgCard src={album.images[0].url} name={item.name} />
                {/* <Halo className="hole bg-white rounded-full "></Halo> */}
              </>)}
              alt={""}>
              <TitleAlbum albun={item.album.name} pista={item.name} />
            </CardSearch>
          </ItemCard>
        )
      })}
    </SearchMusic>
  )
}

export default connect(state => state.music)(CollectionCardSearch)