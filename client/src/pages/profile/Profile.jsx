import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../posts/Posts"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {

  const { currentUser} = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
        <div className="top"> 
            <div className="info">
              <div>
                <div className="item">
                  <PlaceIcon fontSize="small"/>
                  <span>{currentUser.city}</span>
                </div>
                <div className="item">
                  <LanguageIcon fontSize="small"/>
                  <span>{currentUser.website}</span>
                </div>
              </div>
              <span>{currentUser.name}</span>
              <button>follow</button>
            </div> 
          </div>
          <div className="bottom">
            <div className="left">
              <a href="http://facebook.com">
                <FacebookTwoToneIcon fontSize="small" />
              </a>
              <a href="http://facebook.com">
                <InstagramIcon fontSize="small" />
              </a>
              <a href="http://facebook.com">
                <TwitterIcon fontSize="small" />
              </a>
              <a href="http://facebook.com">
                <LinkedInIcon fontSize="small" />
              </a>
              <a href="http://facebook.com">
                <PinterestIcon fontSize="small" />
              </a>
            </div>
            <div className="right">
              <a href="http://" target="_blank" >
                <EmailOutlinedIcon fontSize="small" />
              </a>
              <a href="http://" target="_blank" >
                <MoreVertIcon fontSize="small"/>
              </a>
            </div>
          </div>
          
          
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;