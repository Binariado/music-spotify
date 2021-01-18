import React from 'react'
import styled from "styled-components"
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';
import CardSearch, { titlePosition, borderStyle } from './CardMusic'

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
const Albumnes = [
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://i.pinimg.com/originals/da/18/3e/da183e46c3de1eaefa4f6705ca9a50dd.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://i.pinimg.com/originals/da/18/3e/da183e46c3de1eaefa4f6705ca9a50dd.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  },
  {
    albun: "Insecure",
    pista: "Love in air",
    src: "https://f4.bcbits.com/img/0016073391_10.jpg"
  }
]

const SearchMusic = styled.div`
  width: 90%;
`

const CollectionCardSearch = () => (
  <SearchMusic className="p-4 flex flex-wrap">
    {Albumnes.map((items, idx) => (
      <div  key={idx} className="p-4">
        <CardSearch
          position={titlePosition.BOTTOM}
          //borderStyle={borderStyle.ROUNDED}
          size={["10rem", "10rem"]}
          src={items.src}
          className="hover:shadow-lg cursor-pointer"
          // childrenAvatar={(<Halo className="hole bg-white rounded-full "></Halo>)}
          alt={""}>
          <TitleAlbum albun={items.albun} pista={items.pista} />
        </CardSearch>
      </div>
    ))}
  </SearchMusic>
)

export default CollectionCardSearch