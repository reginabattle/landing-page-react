import React from 'react';
import Header from './components/header';
import Banner from './components/banner';

const App = () => {
  return (
  	<React.Fragment>
  		<Header />
	    <main className="content">
	    	<Banner />
	    </main>
    </React.Fragment>
  );
}

export default App;
