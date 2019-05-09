import React from 'react';
import logo from '../images/logo-endless.svg';


const Header = props => {
	return(
		<header className="header">
		  <div className="header-content">
		  	<img className="logo" src={logo} alt="Logo" />
			</div>
		</header>
	)
}

export default Header;