import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../Login/login.scss'

function Logout() {
    const {logout} = useAuth0()
  return (
    <button className='btn-login' onClick={() => logout()}>
      Logout
    </button>
  )
}

export default Logout