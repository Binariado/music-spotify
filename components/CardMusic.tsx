import React, { ReactNode, useState } from 'react'

import styled from 'styled-components'

const Avatar = styled.div.attrs(props => ({
  size: props.size || ["3rem", "3rem"],
}))`
  height: ${props => props.size[0]};
  width: ${props => props.size[1]};
  position: relative;
  .hole{
    height: calc(100% / 6);
    width: calc(100% / 6);
    position: absolute;
  }
`

const NodeConte = ({ children }) => {
  return children;
}

type PropsCard = {
  childrenAvatar?: ReactNode,
  titlePosition?: string,
  borderStyle?: string,
  size?: string | number | object,
  src?: string,
  alt?: string,
}

const Halo = styled.div`
  height: calc(100% / 6);
  width: calc(100% / 6);
  position: absolute;
`

const NodeAvatar = ({ childrenAvatar, size, borderStyle }: PropsCard) => {

  return (
    <Avatar
      size={size instanceof Array? size: [size, size]}
      className={`flex items-center justify-center ${borderStyle}`}>
      {childrenAvatar}
    </Avatar>
  )
}

const CardMusicComponent = (props) => {

  const { position, className, children } = props;

  const ElmReact = [NodeAvatar, NodeConte];
  let tb = false;
  if (position === 'left') {
    ElmReact.reverse();
  } else if (position === 'top') {
    ElmReact.reverse();
    tb = true;
  } else if (position === 'bottom') {
    tb = true;
  }

  const NodePrimary = ElmReact[0];
  const NodeSecondary = ElmReact[1];
  return (
    <CardMusic tb={tb} position={position} className={className}>
      <NodePrimary {...props} />
      {children && (
        <NodeSecondary {...props} />
      )}
    </CardMusic>
  )
};

interface CardMusicProps {
  position?: string,
  tb?: boolean,
}


const CardMusic = styled.div.attrs<CardMusicProps>(({ position, tb }) => ({
  style: {
    ...tb ?
    {
      flexDirection: position === 'top' || position === 'bottom' ? 'column' : null
    } : {},
  }
}))`
  display: flex;
  align-items: center;
`;

export default CardMusicComponent

export const titlePosition = {
  TOP: "top",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM: "bottom",
}

export const borderStyle = {
  ROUNDEDFULL: "rounded-full",
  ROUNDED: "rounded",
}