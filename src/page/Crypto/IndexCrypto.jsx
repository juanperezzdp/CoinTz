import React from 'react';
import NavBarr from '../../components/NavBar/NavBarr';
import AppTableCrypto from '../../components/Table/TableApiCrypto/AppTableCrypto';
import CryptoLanding from './CryptoLanding';
import IndexFooter from '../../components/Footer/IndexFooter';

function IndexCrypto() {
	return (
		<div>
			<NavBarr />
			<CryptoLanding />
			<AppTableCrypto />
			<IndexFooter />
		</div>
	);
}

export default IndexCrypto;
