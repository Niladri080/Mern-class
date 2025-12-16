import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../Context/UserContext";
import {useContext } from "react";
import Loader from "../components/ui/Loader";

const PrivateAdminAuth = ({ children }) => {
  const {setuser}=useContext(UserContext);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_PATH}/admin/home`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.user.role==='admin'){
        setuser(res.data.user);
        localStorage.setItem("user",JSON.stringify(res.data.user));
        setAuthenticated(true);
        }
        else{
          setAuthenticated(false);
        }
      })
      .catch(() => setAuthenticated(false));
  }, []);

  useEffect(() => {
    if (authenticated === false) {
      navigate("/login");
    }
  }, [authenticated, navigate]);

  if (authenticated === null) {
    return <Loader/>;
  }
  if (authenticated) {
    return children;
  }
  return null;
};

export default PrivateAdminAuth;
