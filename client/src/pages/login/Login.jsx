import './login.scss'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

const Login = () => {
  const [logUser, setLogUser] = useState({
    username: '',
    password: ''
  })

  const [logErr, setLogErr] = useState(null)

  const handleChange = (e) => {
    setLogUser(prev => ({ ...prev, [e.target.name]: e.target.value}) )
    
  }

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = async (e)=> {
    e.preventDefault()
    try {
      await login(logUser)
      navigate("/")
    } catch (err) {
      setLogErr(err.response.data)
    }
    
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hellow World!</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, molestias. Lorem ipsum, dolor sit 
            amet consectetur adipisicing elit. Ratione, molestias.</p>
          <span>Don't  you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='User Name' name='username' onChange={handleChange}/>
            <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
            {logErr && logErr}
            <button onClick={handleLogin}>Login</button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login



