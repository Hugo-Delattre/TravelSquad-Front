import axios from "axios";
import { accountService } from "./account.service";
const axiosInstanceProfile= axios.create({
    baseURL: "https://travelsquadb.up.railway.app/",
  });


// Intercepteur pour la mise en place du token dans la requête
axiosInstanceProfile.interceptors.request.use(request => {

  if(accountService.isLogged()){
    request.headers.Authorization = 'Bearer '+accountService.getToken()
}

return request
})