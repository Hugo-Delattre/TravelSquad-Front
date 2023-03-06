import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://travelsquadb.up.railway.app/",
  });

let getAllUsers=()=>{
    return  axiosInstance("/profile")
}


export const userService={
    getAllUsers,
}