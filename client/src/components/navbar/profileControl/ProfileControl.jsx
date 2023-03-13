import './profileControl.scss'
import { AuthContext } from '../../../context/authContext'; 
import {  useNavigate, NavLink} from 'react-router-dom'
import { useContext } from "react";

import { profileControls } from '../../../assets/data';

const ProfileControl = () => {
    const { currentUser} = useContext(AuthContext);
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = async (e)=> {
        e.preventDefault()
        try {
          await logout();
          navigate("/login")
        } catch (err) {
          console.log(err.response.data)
        }
        
      }
  return (
    <div className='profileControl'>
       <div className="user">
                <img src={currentUser.profilePic ? currentUser.profilePic : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt=""/>
                <span>{currentUser.username}</span>
            </div>
        <div className='seeAllProfile'>
            <p>See all profile</p>
        </div>
        <div className='profileControlList'>
            {profileControls.map((ele, idx) =>  (
                <ul>
                    <li  
                        key={ele.id}
                        onClick={ idx === profileControls.length -1 ? handleLogout : null} > 
                        <div>{ele.icon}</div>
                        <p>{ele.name}</p>
                    </li>

                </ul>
            ))}
        </div>
        </div>
  )
}

export default ProfileControl