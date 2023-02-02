import api from "../hooks/api_napster";

const key = "ZGM2ZmRhYTEtZjEyYi00NzA5LTk4ZGItZDkyYjZmNDliYTQ0"

async function responseMusic() {
  const response = await api.get(
    `/v2.1/tracks/top?apikey=${key}`
  );
  return response.data.tracks;
}

async function responseAlbums(idAlbum){
  const response = await api.get(
    `/v2.2/artists/${idAlbum}/albums/top`
  );
  console.log(response.data)
}

export default responseMusic;
