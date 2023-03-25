import './leftbar.scss'
import {menuItems} from '../../assets/data'
import { AuthContext } from "../../context/authContext";
import { useContext } from 'react';



const LeftBar = () => {

  const { currentUser} = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className="container">
        
        {menuItems.map((item, index) => (
          <div key={item.id}>
            <div className="menu" >
              {item.id === 1 ? null : (<span>{item.title}</span>)}

              {item.items.map((menu, index) => (
                <div key={index}>
                  {item.id === 1 ? (
                    <div>
                      {index === 0 ? (
                        <div className="item currentUser" key={index}>
                            <img src={currentUser.profilePic ? currentUser.profilePic : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt={currentUser.profilePic} />
                            <span>{currentUser.username}</span>
                        </div>
                      ) : (
                        <div className="item" key={index}>
                          <img src={menu.itemImg} alt={menu.itemImg} />
                          <span>{menu.itemName}</span>
                        </div>
                      )}
                    </div>
                    
                  ) : (
                    <div className="item" key={index}>
                      <img src={menu.itemImg} alt={menu.itemImg} />
                      <span>{menu.itemName}</span>
                  </div>
                  )}
                </div>
                  
                  
              ))}


            </div>
            <hr />
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default LeftBar


