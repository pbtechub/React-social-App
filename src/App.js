import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from "./context/authContext";

function App() {
  // const {currentUser} = useContext(AuthContext);
  const currentUser = true;

  const { mode } = useContext(DarkModeContext);

  
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
          
          />
        <div style={{display: 'flex'}}>
          <LeftBar />
          <div style={{flex: 6}}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />}/>
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