import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home';

import OurTeam from './pages/OurTeam';
import Book from './pages/Book';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ourteam' element={<OurTeam/>}/>
        <Route path='/book/:id' element={<Book/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
