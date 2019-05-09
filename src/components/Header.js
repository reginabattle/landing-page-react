import React from 'react';
import logo from '../images/logo-endless.svg';

const Header = props => {
	return(
		<header className="header">
		  <div className="header-content">
		  	<h1><img className="logo" src={logo} alt="Endless" /></h1>
			</div>
		</header>
	)
}

export default Header;