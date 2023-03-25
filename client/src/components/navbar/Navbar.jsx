
import "./navbar.scss";
import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import ProfileControl from "./profileControl/ProfileControl";

const Navbar = () => {

const {mode, toggleMode} = useContext(DarkModeContext);
const [profileControl, setProfileControl] = useState(false)
const { currentUser} = useContext(AuthContext);


  return (
    <div className="navbar">
        <div className="left">
            
                <span>Friendsbook</span>
           
            <div className="left-icons">
                <HomeOutlinedIcon style={{width: "20px", height: "20px"}}/>
                {!mode ?
                 (<DarkModeOutlinedIcon 
                    onClick={toggleMode}
                    style={{width: "20px", height: "20px", cursor: 'pointer'}}/>) :
                 (<WbSunnyOutlinedIcon 
                    onClick={toggleMode}
                    style={{width: "20px", height: "20px", cursor: 'pointer'}}/>)}
                <GridViewOutlinedIcon style={{width: "20px", height: "20px", cursor: 'pointer'}}/>
            </div>
            <div className="search">
                <SearchOutlinedIcon style={{width: "20px", height: "20px", cursor: 'pointer'}}/>
                <input type="text" placeholder="Search..." />
            </div>

        </div>
        <div className="right">
            <div className="right-icons">
                <PersonOutlinedIcon style={{width: "20px", height: "20px", cursor: 'pointer'}}/>
                <EmailOutlinedIcon style={{width: "20px", height: "20px", cursor: 'pointer'}}/>
                <NotificationsOutlinedIcon style={{width: "20px", height: "20px", cursor: 'pointer'}}/>
            </div>
            <div 
                className="user" 
                onClick={()=> setProfileControl(!profileControl)}>
                <img
                    src={currentUser.profilePic ? currentUser.profilePic : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                    alt=""
                    
                />
                {/* <span>{currentUser.username}</span> */}
                <div>
                    <ExpandMoreIcon 
                        className="chevronDown" 
                        style={{ transform: profileControl && 'rotate(180deg)'}}
                        />
                </div>
            </div>

        </div>

        { profileControl && <ProfileControl/> }
    </div>
  )
}

export default Navbar