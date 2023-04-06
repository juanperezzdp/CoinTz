import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNav from './components/NavBar/AppNav';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = "cointz.us.auth0.com"
const clientId = "FBPwHQH88gK7c1Wc4kdnep0oDNVTbMGf"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}> 
  

    <AppNav/>
    
  </Auth0Provider>
  </React.StrictMode>,
)
