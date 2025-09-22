import React, { useContext ,useEffect} from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../useContext/UserContext";
const Logout = () => {
  const { LogoutUser } = useContext(UserContext);
  useEffect(() => {
    LogoutUser();
  }, []);
  return <Navigate to="/login" />
};
export default Logout;
