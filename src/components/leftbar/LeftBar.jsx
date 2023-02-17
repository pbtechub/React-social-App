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
          <div>
            <div className="menu" key={item.id}>
              {item.id === 1 ? null : (<span>{item.title}</span>)}

              {item.items.map((menu, index) => (
                <div>
                  {item.id === 1 ? (
                    <div>
                      {index === 0 ? (
                        <div className="item currentUser" key={index}>
                            <img src={currentUser.profilePic} alt={currentUser.profilePic} />
                            <span>{currentUser.userName}</span>
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



{/* <div className="menu">
          <div className="user">
            <img src="" alt="" />
            <span>Name</span>
          </div>
          <div className="item">
            
          </div>
        </div> */}