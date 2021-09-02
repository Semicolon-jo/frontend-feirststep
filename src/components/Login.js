import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
function Login() {
  const {isAuthenticated, loginWithRedirect,} = useAuth0();

  return (

      <>
  
    <button className='btn btn-custom btn-lg page-scroll' onClick={() =>
        loginWithRedirect({
            redirectUri: "https://elatedboyd4c87e0.netlify.app/profile",
        })
      }>  <Link to="/profile"></Link>sign up</button>
    
    </>
  );
}

export default Login;