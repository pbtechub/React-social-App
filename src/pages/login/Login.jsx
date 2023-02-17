import './login.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

const Login = () => {

  const { login } = useContext(AuthContext)

  const handleLogin = ()=> {
    login()
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
            <input type="text" placeholder='User Name'/>
            <input type="password" placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login