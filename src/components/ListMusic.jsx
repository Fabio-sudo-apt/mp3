import '../styles/list-music.css'

function ListMusic({ musics }) {
    return (
        <div className="list-music">
            {
                musics.map((music, index) => (
                    <div key={music.index}>
                        <h1 className='text_music'>{++index} - {music.name}</h1>
                    </div>
                ))
            }
        </div>

    )
}

export default ListMusic