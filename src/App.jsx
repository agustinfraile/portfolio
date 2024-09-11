import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error/Error';
import NavbarCnt from './components/NavbarCnt/NavbarCnt';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      {/* <NavbarCnt /> */}
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
