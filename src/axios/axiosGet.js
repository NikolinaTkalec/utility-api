import axios from "axios";

export const axiosGet = async (url, params) => {
  return axios
    .get(url, params)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};
