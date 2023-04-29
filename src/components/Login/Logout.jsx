import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Login/Login.scss';

function Logout() {
	const { logout } = useAuth0();
	return (
		<button
			className='btn-login'
			onClick={() =>
				logout(() => {
					return window.location.origin;
				})
			}
		>
			Cerrar sesion
		</button>
	);
}

export default Logout;
