import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AiChat from './pages/AiChat';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gera-samba-chat' element={<AiChat/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
