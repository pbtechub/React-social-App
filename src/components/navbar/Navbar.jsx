
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

const Navbar = ({mode, setMode}) => {
    
  return (
    <div className="navbar">
        <div className="left">
            
                <span>bhimanprash</span>
           
            <div className="left-icons">
                <HomeOutlinedIcon style={{width: "20px", height: "20px"}}/>
                {!mode ?
                 (<DarkModeOutlinedIcon 
                    onClick={()=> setMode(!mode)}
                    style={{width: "20px", height: "20px"}}/>) :
                 (<WbSunnyOutlinedIcon 
                    onClick={()=> setMode(!mode)}
                    style={{width: "20px", height: "20px"}}/>)}
                <GridViewOutlinedIcon style={{width: "20px", height: "20px"}}/>
            </div>
            <div className="search">
                <SearchOutlinedIcon style={{width: "20px", height: "20px"}}/>
                <input type="text" placeholder="Search..." />
            </div>

        </div>
        <div className="right">
            <div className="right-icons">
                <PersonOutlinedIcon style={{width: "20px", height: "20px"}}/>
                <EmailOutlinedIcon style={{width: "20px", height: "20px"}}/>
                <NotificationsOutlinedIcon style={{width: "20px", height: "20px"}}/>
            </div>
            <div className="user">
                <img
                    src={"https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                    alt=""
                />
                <span>John Doe</span>
            </div>

        </div>
    </div>
  )
}

export default Navbar