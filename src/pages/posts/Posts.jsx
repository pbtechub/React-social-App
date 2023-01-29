import './posts.scss'
import Post from './Post'
import {posts} from '../../assets/data'

const Posts = () => 
   (
    <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
  </div>
  )


export default Posts