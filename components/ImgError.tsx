import React, { useState } from 'react'
import styled, { css } from "styled-components"
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';

const SearchMusic = styled.div`
  display: table;
  margin: 0 auto;
`
const DivImg = styled.div`
    background-color: transparent;
    display: table-cell;
    height: 284.54px;
    vertical-align: middle;
`;

const ImgError = styled.img`
  display: block !important;
  vertical-align: middle !important;
  max-width: 100%;
  max-height: 100%;
  bottom: 0;
`

const ImgErrorComponent = (props) => {
  // console.log(props);
  const { errorSearch } = props;

  return (
    <div className="relative text-center">
      <p className="text-title text-2xl">{errorSearch.title}</p>
      <p className="text-secondary text-lg">{errorSearch.description}</p>
      <SearchMusic className="p-4">
        <DivImg className="">
          <ImgError src={errorSearch.src} />
        </DivImg>
      </SearchMusic>
    </div>
  )
}

export default connect(state => state.error)(ImgErrorComponent)