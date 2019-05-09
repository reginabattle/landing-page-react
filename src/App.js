import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Steps from './components/steps';

const App = () => {
  return (
  	<React.Fragment>
  		<Header />
	    <main className="container">
	    	<Banner />
	    	<Steps />
	    </main>
    </React.Fragment>
  );
}

export default App;
