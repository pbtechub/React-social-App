import './home.scss'
import Stories from '../stories/Stories'
import Post from '../posts/Posts'
import Profile from '../profile/Profile'

const Home = () => {
  return (
    <div className='home'>
      <Stories />
      {/* <Profile /> */}
      <Post />
    </div>
  )
}

export default Home