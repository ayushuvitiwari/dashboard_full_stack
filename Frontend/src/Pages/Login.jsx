import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './CSS/Login.css'

const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')
  const Navigate = useNavigate()

  async function handlelogin(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, password
        })
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userInfo', JSON.stringify((data)));
        Navigate('/dashboard');
      } else {
        seterror(data.message)
      }
    } catch (error) {
      console.log(error);
      alert('server error');

    }
  }

  return (
    <>
      <div className="login-outer">

        <div className="login-div">

          <h1>Login</h1>

          <p>Enter your Email and password</p>

          <input type="email" placeholder='Enter your email' className='input-box' onChange={(e) => setemail(e.target.value)} />
          <input type="password" placeholder='Enter your password' className='input-box' onChange={(e) => setpassword(e.target.value)} />

          <a href="#">forgot password</a>

          {error && <p className="error-message">{error}</p>}

          <button className='login-btn' onClick={handlelogin}>Login</button>

          <p>Don't have an account? <NavLink to='/register'>Sign Up</NavLink></p>

        </div>

      </div>
    </>
  )
}

export default Login