import { useContext } from "react";
import { UserContext } from "../../Provider/AuthContext";

const useAuth = () => {
  const auth = useContext(UserContext);
  return auth;
};

export default useAuth;
