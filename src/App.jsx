import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error/Error';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NavbarCnt from './components/NavbarCnt/NavbarCnt';

function App() {

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <NavbarCnt />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
