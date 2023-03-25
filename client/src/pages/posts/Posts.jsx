import './posts.scss'
import Post from './Post'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Posts = () => {

const [posts, setPosts] = useState([])
const [err, setErr] = useState(null)

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc5NzQ4MDk3fQ.75r2-927NrCECSgK9emyRfuGUjTSS9uQFuM7fC514jI'

  useEffect(() => {  
    makeRequest.get("/posts", { headers: {
      Authorization: `Bearer ${token}`
    }})
      .then((response) => {
        setPosts(response.data)
        console.log(response.data);
      })
      .catch((err)=>{setErr(err.message)})

  }, [])

  // const { isLoading, error, data } = useQuery(['posts'], () => {
  //   makeRequest.get('/posts').then((res)=> {
  //     return res.data
  //   })

   
  // })

  // console.log(posts);
    return (
      <div className="posts">
        {err ? 'Somthing is went wrong...' :
         posts.map(post=>(
          <Post post={post} key={post.id}/>
        ))}
    </div>
    )
}



export default Posts