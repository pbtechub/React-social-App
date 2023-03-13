import { useState, useEffect } from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftbar/LeftBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import RightBar from './components/rightbar/RightBar';

function App() {
  const currentUser = true;
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('changeMode' || false)))

  useEffect(() => {
    localStorage.setItem('changeMode', JSON.stringify(mode));
  }, [mode])
  
  return (
    <div className={`theme-${mode ? 'dark' : 'light'}`}>
      {!currentUser ? (
          <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </BrowserRouter>
      ) : (
        <div>
        <Navbar 
          mode={mode}
          setMode={setMode}
          />
        <div style={{display: 'flex'}}>
          <LeftBar />
          <div style={{flex: 6}}>
            <BrowserRouter>
              <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/profile/:id' element={<Profile />}/>
              </Routes>
            </BrowserRouter>
          </div>
          <RightBar />
        </div>
      </div>
      )}
      
      
    </div>
  );
}

export default App;
