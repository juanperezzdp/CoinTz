import React from 'react'
import Login from './Login'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile';

function AppLogin() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
        {isAuthenticated 
        ? (<>
            <Profile />
          </>) 
          : (
          <Login/>
        )}
    </div>
  );
}

export default AppLogin