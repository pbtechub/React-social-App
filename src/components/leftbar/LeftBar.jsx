import './leftbar.scss'
import {menuItems} from '../../assets/data'



const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        {menuItems.map((item, index) => (
          <div>
            <div className="menu" key={item.id}>
              {item.id === 1 ? null : (<span>{item.title}</span>)}
              
              {item.items.map((menu, index) => (
                  <div className="item" key={index}>
                    <img src={menu.itemImg} alt={menu.itemImg} />
                    <span>{menu.itemName}</span>
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