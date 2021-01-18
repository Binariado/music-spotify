import React, { ReactNode } from 'react'
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components';
import { useDebounce, useForm } from '../hooks';

const Header = styled.header`
  display: flex;
  position: relative;
  align-items: center;
`;

const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: solid 0px transparent;
  border-radius: 3px;
  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const AppBar = () => {

  const [formValue, handleInput, handleInputReset] = useForm({
    "searchMusic": "",
  });

  const [handleSearch, cancelDebounce] = useDebounce({
    callback: async (sear) => {
      console.log(sear)
    },
    wait: 1000
  })


  const _handleSearch = (e) => {
    handleInput(e);
    handleSearch(e.target.value);
  }

  return (
    <Header className="p-4">
      <div className="flex-grow flex">
        <div className="flex items-stretch">
          <label className="row-span-2 flex items-center">
            <SearchIcon />
          </label>
          <div className="col-span-2 ml-1 p-1 flex items-center">
            <Input 
            name="searchMusic" 
            placeholder="buscar canciones"
            className="bg-gray-200 focus:bg-white" 
            onChange={(e) => _handleSearch(e)}
            size="0.2rem"
            value={formValue.searchMusic}
            type="text"/>
          </div>
        </div>
      </div>

      <div className="cursor-pointer">
        <Avatar className="shadow-lg" alt="Remy Sharp" src="https://cnet1.cbsistatic.com/img/WfkqAocgYhb8A85smYcTH_acFa8=/1200x630/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg" />
      </div>
    </Header>
  );
}

export default AppBar;