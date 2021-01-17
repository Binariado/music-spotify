import Layout from '../components/templates/Layout'
import AppBar from '../components/AppBar'
import PlayerMusic from '../components/PlayerMusic/PlayerMusic'
import CollectionMusic from '../components/CollectionMusic'

export default function Home() {
  return (
    <Layout title={"Music-spotify"}>
      <div className="h-screen flex flex-col">
        <div className="container mx-auto h-full flex flex-col"> 
          <AppBar />
          <div className="h-full">

          </div>
          <CollectionMusic />
        </div>
        <PlayerMusic />
      </div>
    </Layout>
  )
}