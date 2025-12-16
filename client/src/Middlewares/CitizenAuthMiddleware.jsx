import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import Loader from "../components/ui/Loader";
import { UserContext } from "../Context/UserContext";
const PrivateAuth = ({ children }) => {
  const {setuser}=useContext(UserContext);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_PATH}/user/home`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.user.role==='citizen'){
          setuser(res.data.user);
          localStorage.setItem("citizen",JSON.stringify(res.data.user));
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

export default PrivateAuth;
