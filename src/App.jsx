import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error/Error';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
      <div className="App">
        <Home />
      </div>
  )
}

export default App
