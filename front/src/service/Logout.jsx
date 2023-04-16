import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    console.log('test');
    useEffect(() => {
      sessionStorage.removeItem('userData');
      navigate('/');
    }, []);
  
    return null;
  }

export default Logout