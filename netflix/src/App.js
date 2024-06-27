
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="text-black">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
