import Main from "./pages/Main";
import About from "./pages/About";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/about' element={ <About/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
