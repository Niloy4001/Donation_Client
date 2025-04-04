import axios from "axios";


const instance = axios.create({
  baseURL: "https://donate-murex.vercel.app",
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
