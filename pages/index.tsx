import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../components/templates/Layout'
import AppBar from '../components/AppBar'
import PlayerMusic from '../components/PlayerMusic/PlayerMusic'
import CollectionMusic from '../components/CollectionMusic'
import CardSearch from '../components/CardSearch';
import {getTokenAsync} from '../state/tokenReducer/token.actions';


export default function Home() {
  const dispatch = useDispatch();

  const token = useSelector(state => state.token);

  useEffect(() => {
    dispatch(getTokenAsync());
  }, []);

  return (
    <Layout title={"Music-spotify"}>
      <div className="h-screen flex flex-col relative">
        <div className="container mx-auto h-full flex flex-col"> 
          <AppBar />
          <div className="h-full overflow-auto flex justify-center">
            <CardSearch />
          </div>
        </div>
        <div className="absolute w-full bottom-0">
          {/* <CollectionMusic /> */}
          <PlayerMusic />
        </div>
      </div>
    </Layout>
  )
}//absolute w-full bottom-0 