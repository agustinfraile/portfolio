import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error/Error';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          {/* <Route exact path='/' element={<Home/>} /> */}
          <Route path='/*' element={<Error/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
