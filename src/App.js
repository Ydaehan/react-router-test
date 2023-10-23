import React from 'react';
import Main from "./pages/Main";
import About from "./pages/About";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavbarTest from './components/bootstrap/NavbarTest';



function App() {
  return (
    <>
    <Router>
      <NavbarTest/>
      <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/about' element={ <About/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
