import axios from "axios";
import { accountService } from "./account.service";
const axiosInstanceLogin = axios.create({
    baseURL: "https://travelsquadb.up.railway.app/",
  });


// Intercepteur pour la mise en place du token dans la requête
  axiosInstance.interceptors.request.use(request=>{

    if(accountService.isLogged()){
        request.headers.authority='Bearer'+ accountService.getToken()
    }
    return request
  })