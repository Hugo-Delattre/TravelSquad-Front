import { Navigate } from "react-router-dom";
import { accountService } from "../_services/account.service";

const AuthGuard = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/profile" />;
    //on verrifie avec la methode isLogged si on est connecté puis on redirige vers la page d'accueil
  }

  return children;
};

export default AuthGuard;
