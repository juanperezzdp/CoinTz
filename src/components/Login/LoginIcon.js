import React from 'react'
import { Link } from 'react-bootstrap-icons'
import { useAuth0 } from '@auth0/auth0-react'

function LoginIcon() {
    const { user} = useAuth0();
  return (
    <Link>
    <div>
    <img src={user.picture} alt={user.name} />
    </div>
    </Link>
  )
}

export default LoginIcon