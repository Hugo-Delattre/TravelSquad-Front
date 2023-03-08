import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://travelsquadb.up.railway.app/",
  });

let getAllUsers=()=>{
    return  axiosInstance("/myprofile")
}


export const userService={
    getAllUsers,
}