import React from 'react';
import './App.css';
import NavBarIndex from './pages/Navbar/index';

import Routes from './routes';

function App() {
  return (
    <div className="App">
       <NavBarIndex /> 
       <div id="content">
        <Routes />
       </div>
       
       
       
    </div>
  );
}

export default App;
