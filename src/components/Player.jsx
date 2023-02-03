import { useEffect, useRef, useState } from "react"
import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai"
import {ImNext, ImPrevious} from "react-icons/im"
import {responseImage} from "../services/responseMusic"
import '../styles/player.css'
function Player({ musics }) {
    const audio = useRef()

    const [music, setMusic] = useState({})
    const [listMusic, setListMusic] = useState(musics)
    let [indexMusic, setIndexMusic] = useState(0)
    const [isPlay, setIsPlay] = useState(false)

    const getImage = async (music) => {
        return await responseImage(music)
    }

    useEffect(() => {
        setListMusic(musics)
    }, [musics])

    useEffect(() => {
        if (listMusic.length > 0) {
            const images = getImage(listMusic[indexMusic])
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
        if (indexMusic === listMusic.length - 1) {
            setIndexMusic(0)
            console.log("deu certo")
        } else {
            setIndexMusic(++indexMusic)
        }

        setIsPlay(false)
        setTimeout(function () {
            play()
        }, 500)
    }

    const prev = () => {
        if (indexMusic > 0) {
            setIndexMusic(--indexMusic)
        } else {
            setIndexMusic(listMusic.length - 1)
        }
        setIsPlay(false)
        setTimeout(function () {
            play()
        }, 50)
        console.log(music)
    }

    return (
        <div className="container-player">
            <div className="capa"></div>
            <h3>{music.name}</h3>
            <div className="play">
                <audio ref={audio} src={music.previewURL}></audio>
                <a onClick={() => prev()}><ImPrevious /></a>
                <a onClick={isPlay ? pause : play}>{isPlay ? <AiFillPauseCircle /> : <AiFillPlayCircle />}</a>
                <a onClick={() => next()}><ImNext /></a>
            </div>
        </div>
    )
}

export default Player