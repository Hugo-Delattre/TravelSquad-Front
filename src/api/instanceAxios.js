import axios from "axios"; 

const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/"
})

export default axiosInstance;