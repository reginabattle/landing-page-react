import React from 'react';
import Header from './components/header';
import Banner from './components/banner';

const App = () => {
  return (
  	<React.Fragment>
  		<Header />
	    <main className="container">
	    	<Banner />
	    </main>
    </React.Fragment>
  );
}

export default App;
