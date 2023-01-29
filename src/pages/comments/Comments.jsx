import './comments.scss'
import { comments } from '../../assets/data'
import { user } from '../../assets/data'

const Comments = () => {
  return (
    <div className="comments">
        {user.map(currentUser => (
            <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
          </div>
        ))}
      
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments