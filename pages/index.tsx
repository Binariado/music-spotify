import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/templates/Layout'
import AppBar from '../components/AppBar'
import PlayerMusic from '../components/PlayerMusic/PlayerMusic'
import CollectionMusic from '../components/CollectionMusic'
import CardSearch from '../components/CardSearch';
import ImgError from '../components/ImgError';
import { getTokenAsync } from '../state/tokenReducer/token.actions';
import { clearErros } from '../state/errorReducer/error.actions';
import { useDebounce } from '../hooks';
import { paginate_search } from '../state/musicReducer/music.actions'

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const music = useSelector(state => state.music);
  const [stateInit, setStateInit] = useState(true);
  const loading = useSelector(state => state.music.loading);
  const error = useSelector(state => state.error);

  const { errorSearch } = error;

  const [handleSearch, cancelDebounce] = useDebounce({
    callback: async (data) => {
      try {
        dispatch(paginate_search({ search: 'p', ...data }));
      } catch (error) {
        console.log(error)
        cancelDebounce();
      }
    },
    wait: 500
  })


  const HanldePaginator = (e) => {
    try {
      if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
        if (!loading) {
          handleSearch(music.tracks);
        }
      }
    } catch (error) {
    }
  }

  useEffect(() => {
    dispatch(getTokenAsync());
    dispatch(clearErros());
  }, []);

  

  useEffect(() => {
    if (token.token && stateInit) {
      dispatch(paginate_search({ search: 'p', token: token.token }));
      
    }
    return () => setStateInit(false);;
  }, [token, stateInit]);

  // useEffect(() => {
  //   console.log(music.tracks)
  // }, [music])

  // console.log(music.selectPlayer);

  return (
    <Layout title={"Music-spotify"}>
      <div className="h-screen flex flex-col">

        <div className="container overflow-hidden mx-auto h-full flex flex-col">
          <AppBar />
          <div className="h-full overflow-hidden flex justify-center">
            <div onScroll={HanldePaginator} className="h-full overflow-auto flex flex-col w-full">
              {!errorSearch && (
                <CardSearch />
              )}

              {loading && (
                <div className="flex justify-center items-center mb-4">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>
                    cargadon
                  </span>
                </div>
              )}
            </div>

            {errorSearch && (
              <ImgError />
            )}

          </div>
        </div>
        <PlayerMusic />
        
      </div>
    </Layout>
  )
}//absolute w-full bottom-0 