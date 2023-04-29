import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Login/Login.scss';
import Logout from './Logout';

function Profile() {
	const { user, isAuthenticated } = useAuth0();
	const [openWindow, setOpenWindow] = useState(true);

	const closeWindow = () => {
		setOpenWindow(false);
	};

	return (
		isAuthenticated && (
			<div className='opacity'>
				{openWindow && (
					<div className='profileLogin'>
						<img src={user.picture} alt={user.name} />
						<h5>{user.name}</h5>
						<p>{user.email}</p>
						<p>{user.updated_at.slice(0, 10)}</p>
						<div>
							<Logout />
							<button className='btn-login' onClick={closeWindow}>
								Cerrar
							</button>
						</div>
					</div>
				)}
			</div>
		)
	);
}

export default Profile;
