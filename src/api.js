import { axiosGet } from "./axios/axiosGet";

export const getAllNews = () => {
  const url = "https://newsapi.org/v2/top-headlines";
  const params = {
    params: {
      country: "us",
      category: "technology",
      apiKey: process.env.NEWSAPI_KEY,
    },
  };
  return axiosGet(url, params);
};

export const getAllMovies = () => {
  const url = "https://youtube-data8.p.rapidapi.com/search/";
  const params = {
    params: {
      q: "movie",
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
    },
  };

  return axiosGet(url, params);
};

export const getAllSongs = () => {
  const url = "https://yt-api.p.rapidapi.com/playlist";
  const params = {
    params: {
      id: "PLMC9KNkIncKseYxDN2niH6glGRWKsLtde",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };

  return axiosGet(url, params);
};

export const getSong = (id) => {
  const url = "https://youtube-mp36.p.rapidapi.com/dl";
  const params = {
    params: {
      id: id,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };

  return axiosGet(url, params);
};

export const getMovie = (id) => {
  const url = "https://youtube-data8.p.rapidapi.com/video/streaming-data/";
  const params = {
    params: {
      id: id,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
    },
  };

  return axiosGet(url, params);
};
