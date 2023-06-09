import { useContext } from "react";
import { Authcontext } from "../Providers/AuthProvider";

const useAuth = () => {
  const auth = useContext(Authcontext); //why name is auth?
  return auth;
};

export default useAuth;
