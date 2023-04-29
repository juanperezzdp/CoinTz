import React from 'react';
import Profile from '../../components/Login/Profile';
import NavBarr from '../../components/NavBar/NavBarr';
import AppTableMarkets from '../../components/Table/TableApiMarke/AppTableMarkets';
import HomeLanding from './HomeLanding';
import IndexFooter from '../../components/Footer/IndexFooter';
function IndexHome() {
	return (
		<>
			<NavBarr />
			<HomeLanding />
			<Profile />
			<AppTableMarkets />
			<IndexFooter />
		</>
	);
}

export default IndexHome;
