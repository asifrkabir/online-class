import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main/Main';

function App() {

  const scrollBottom = () => {
    window.scrollTo(0, 20000);
  }

  return (
    <div className="App" style={{ backgroundColor: '#e2f3f5' }}>
      <Navbar scrollBottom={scrollBottom}></Navbar>
      <Main></Main>
    </div>
  );

}

export default App;
