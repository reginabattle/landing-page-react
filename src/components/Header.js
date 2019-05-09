import React from 'react';

const Header = props => {
	return(
		<header className="header">
		  <div className="header-content">
				<h1>{props.title}</h1>
			</div>
		</header>
	)
}

export default Header;