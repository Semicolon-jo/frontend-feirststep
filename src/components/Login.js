import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
function Login() {
  const {isAuthenticated, loginWithRedirect,} = useAuth0();

  return (
      <>
  
    <button className='btn btn-custom btn-lg page-scroll' onClick={() =>
        loginWithRedirect({
            redirectUri: "http://localhost:3000/profile",
        })
      }>  <Link to="/profile">sign up</Link></button>
    
    </>
  );
}

export default Login;