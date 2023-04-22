import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Auth0Provider } from '@auth0/auth0-react';
import {router} from './router/Router'
import {RouterProvider} from 'react-router-dom'



const domain = 'cointz.us.auth0.com'
const clientId = 'KW45lvUU5JL23qicvDfzH7bnkpqnIahU'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}> 
  

  <RouterProvider router={router}  />
    
  </Auth0Provider>
  </React.StrictMode>,
)
