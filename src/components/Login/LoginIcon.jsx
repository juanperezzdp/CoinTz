import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginIcon() {
	const { user } = useAuth0();
	return (
		<div>
			<img
				style={{ width: '2.5rem', borderRadius: '50%' }}
				src={user.picture}
				alt='Img'
			/>
		</div>
	);
}

export default LoginIcon;
