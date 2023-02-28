import axios from "axios"; 

const axiosInstance = axios.create({
  baseURL: "https://travelsquad.up.railway.app/"
})

export default axiosInstance;