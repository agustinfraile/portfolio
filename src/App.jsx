import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error/Error';
import Navbar from './components/NavBar/NavBar';

import './App.css';

function App() {

  return (
    <BrowserRouter>

      <Navbar />
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
