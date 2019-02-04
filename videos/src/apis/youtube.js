import axios from "axios";

const KEY = "AIzaSyCz_sd5PLmcy1L5R9nBJ5bTg--yeGdY3v0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
