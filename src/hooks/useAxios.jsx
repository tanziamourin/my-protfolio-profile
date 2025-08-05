import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `my-protfolio-profile-server.vercel.app`,
});

const useAxios = () => axiosInstance;

export default useAxios;
