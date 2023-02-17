
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

    const {mode, toggleMode} = useContext(DarkModeContext);
    const { currentUser} = useContext(AuthContext);

    console.log(currentUser)
    
  return (
    <div className="navbar">
        <div className="left">
            
                <span>bhimanprash</span>
           
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
            <div className="user">
                <img
                    src={currentUser.profilePic}
                    alt=""
                />
                <span>{currentUser.userName}</span>
            </div>

        </div>
    </div>
  )
}

export default Navbar