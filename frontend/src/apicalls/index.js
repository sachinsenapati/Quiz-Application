import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance