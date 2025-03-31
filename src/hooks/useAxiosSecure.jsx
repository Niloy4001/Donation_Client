import axios from "axios";
import { AuthContext } from "../context api/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
  baseURL: "http://localhost:3000"
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=>{
    
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject('error from secure post request',error);
      }
    );
  })

  // Adding a response interceptor
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
          navigate("/login");
        }
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
