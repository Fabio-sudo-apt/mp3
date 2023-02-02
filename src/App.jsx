import { useEffect, useState } from "react"
import ListMusic from './components/ListMusic'
import Player from "./components/Player"
import responseMusic from "./services/responseMusic"
import './styles/app.css'

function App() {
  const [tracks, setTracks] = useState([])

  const loadMusics = async () => {
    const musics = await responseMusic()
    setTracks(musics)
  }

  useEffect(() => {
    loadMusics()
  }, [])

  return (
    <div className="App">
      <div className="painel_play">
        <ListMusic musics={tracks} />
        <Player musics={tracks} />
      </div>
    </div>
  )
}

export default App
