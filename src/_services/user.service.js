import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://travelsquadb.up.railway.app/",
  });

let getAllUsers = (token) => {
   return axiosInstance.get("/login")
}






// Déclaration des serivces pour import
export const userService = {
     getAllUsers,
}