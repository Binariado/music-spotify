import React, { ReactNode } from 'react'
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components';
import { useDebounce, useForm } from '../hooks';
import { useApiRest } from '../helpers';
import { MUSIC_ALL } from '../state/musicReducer/music.actions'
import { SET_ERROR } from '../state/errorReducer/error.actions'
/// 

const Header = styled.header`
  display: flex;
  position: relative;
  align-items: center;
`;

const Input = styled.input.attrs(props => ({
  type: props.type || "text",

}))`

`;

const AppBar = () => {
  const dispatch = useDispatch();
  const { search } = useApiRest("search");
  const [formValue, handleInput, handleInputReset] = useForm({
    "searchMusic": "",
  });

  const token = useSelector(state => state.token);

  const [handleSearch, cancelDebounce] = useDebounce({
    callback: async (sear) => {
      try {
        if (sear === '') cancelDebounce();
        const resp = await search({ search: sear, ...token });
        if (resp) {
          const { errors } = resp;
          if (!errors) {
            dispatch(MUSIC_ALL({ ...resp.search }));
          }
          return
        }
        
        if(sear !== ''){
          dispatch(SET_ERROR({
            errorSearch: {
              title: "Error al buscar",
              description: "Verificar tu conexión a internet o refresca el navegador",
              src: "/images/404.jpg"
            }
          }))
        }

      } catch (error) {
        console.log("search error", error);
        dispatch(SET_ERROR({
          errorSearch: {
            title: "oH!",
            description: "Al parecer fue un error al momento de buscar",
            src: "/images/404.jpg"
          }
        }))
      }
    },
    wait: 1000
  })

  const _handleSearch = (e) => {
    handleInput(e);
    handleSearch(e.target.value, search);
  }

  return (
    <Header className="p-4">
      <div className="flex-grow flex">
        <div className="flex items-stretch">
          <div className="relative">
            <div className="absolute top-4 left-3">
              <SearchIcon className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
            </div>
            <Input
              name="searchMusic"
              placeholder="buscar canciones"
              className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
              onChange={(e) => _handleSearch(e)}
              size="0.2rem"
              value={formValue.searchMusic}
              type="text" />
          </div>
        </div>
      </div>
    </Header>
  );
}

export default AppBar;