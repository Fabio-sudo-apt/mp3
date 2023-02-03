import api from "../hooks/api_napster";

const key = "ZGM2ZmRhYTEtZjEyYi00NzA5LTk4ZGItZDkyYjZmNDliYTQ0"

async function responseMusic() {
  const response = await api.get(
    `/v2.1/tracks/top?apikey=${key}`
  );
  return response.data.tracks;
}

async function responseImage(music){
  const response = await api.get(
    `/v2.1/albums/${music.albumId}/image?apikey=${key}`
  );
  console.log(response.data.albums)
}

export {responseMusic, responseImage};
