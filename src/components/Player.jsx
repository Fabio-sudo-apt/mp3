import { useEffect, useRef, useState } from "react"
import '../styles/player.css'
function Player({ musics }) {
    const audio = useRef()

    const [music, setMusic] = useState({})
    const [listMusic, setListMusic] = useState(musics)
    let [indexMusic, setIndexMusic] = useState(0)
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        setListMusic(musics)
    }, [musics])

    useEffect(() => {
        if (listMusic.length > 0) {
            setMusic(listMusic[indexMusic])
        }
    }, [musics, indexMusic])


    const play = () => {
        setIsPlay(true)
        audio.current.play()
        console.log("play")
    }

    const pause = () => {
        setIsPlay(false)
        audio.current.pause()
    }

    const next = () => {
        if(indexMusic === listMusic.length -1){
            setIndexMusic(0)
            console.log("deu certo")
        }else{
            setIndexMusic(++indexMusic)
        }
        
        setIsPlay(false)
        setTimeout(function () {
            play()
        }, 500)
    }

    const prev = () => {
        if(indexMusic > 0){
            setIndexMusic(--indexMusic)
        }else{
            setIndexMusic(listMusic.length - 1)
        }
        setIsPlay(false)
        setTimeout(function () {
            play()
        }, 500)
        console.log(music)
    }

    return (
        <div className="container-player">
            {/* <img src={} alt={}/> */}
            <h3>{music.name}</h3>
            <audio ref={audio} src={music.previewURL}></audio>
            <button onClick={() => prev()}>Anterior</button>
            <button onClick={isPlay ? pause : play}>{isPlay ? "Pause" : "Play"}</button>
            <button onClick={() => next()}>Proximo</button>
        </div>
    )
}

export default Player