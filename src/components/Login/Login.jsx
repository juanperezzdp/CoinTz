import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Login/Login.scss';
function Login() {
	const { loginWithRedirect } = useAuth0();
	return (
		<div>
			<button className='btn-login' onClick={() => loginWithRedirect()}>
				Iniciar sesion
			</button>
		</div>
	);
}

export default Login;
