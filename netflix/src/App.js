
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className="text-black">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/movies/:id' element={<MoviePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
