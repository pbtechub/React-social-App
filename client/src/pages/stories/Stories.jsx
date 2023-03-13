import './stories.scss'
import { stories } from '../../assets/data'

const Stories = () => {
  return (
    <div className="stories">
    {/* <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div> */}
    {stories.map(story=>(
      <div className="story" key={story.id}>
        <img src={story.img} alt="" />
        <span>{story.name}</span>
        {story.id === 1 && (<button>+</button>)}
      </div>
    ))}
  </div>
  )
}

export default Stories