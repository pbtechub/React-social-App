import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import './register.scss'

const Register = () => {
  const [regUser, setRegUser] = useState({
    username: '',
    email: '',
    name: '',
    password: ''
  })

  const [regErr, setRegErr] = useState(null)

  const handleChange = (e) => {
    setRegUser(prev => ({ ...prev, [e.target.name]: e.target.value}) )
    
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8800/register', regUser)
    }  catch (err) {
        setRegErr(err.response.data)
      
    } 
  }

  console.log(regErr)
   
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Bhiman social</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, molestias. Lorem ipsum, dolor sit 
            amet consectetur adipisicing elit. Ratione, molestias.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='User Name' name='username' onChange={handleChange}/>
            <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
            <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
            <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
            {regErr && regErr}
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register