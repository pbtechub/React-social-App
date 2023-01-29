import './rightbar.scss'
import {rightItems} from '../../assets/data'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        {rightItems.map((item) => (
          <div className="item" key={item.id}>
            <span>{item.title}</span>
            {item.items.map((itm, index) =>(
              <div className="user" key={index}>
                <div className="userInfo">
                  <img
                    src={itm.itemImg}
                    alt=""
                  />
                  {item.id === 3 && ( <div className="online" />)}
                  {item.id === 2 ? 
                  (<div><span>{itm.itemName}</span><p>{itm.activity}</p></div>) 
                  :(<span>{itm.itemName}</span>)}
                  
                </div>
                {item.id === 1 ? (
                  <div className="buttons">
                    <button>follow</button>
                    <button>dismiss</button>
                  </div>
                ) : (item.id === 2 ? ( <span>{itm.time}</span>) : null)}
               
            </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightBar