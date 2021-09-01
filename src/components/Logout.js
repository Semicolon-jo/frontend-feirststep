import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth0();
  // const { user, isAuthenticated, } = useAuth0();
console.log('user in logout:',user);
  return isAuthenticated && (
    // <button  style={{ color: "#608CFD", fontWeight: "bold" ,}} onClick={() => {
    //   logout({ returnTo: window.location.origin });
    // }}>Log out</button>
    <>
  
    <a style={{ color: "#608CFD", fontWeight: "bold" ,}} onClick={() => {
           logout({ returnTo: window.location.origin });
        }}>  logout
              </a>
              </>
  );
}

export default LogoutButton;