import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/Login.css'

const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const Navigate = useNavigate()

  const CorrectEmail = 'ayush@gmail.com'
  const CorrectPassword = '0016'

  function handlelogin (){
    if(email == CorrectEmail || password == CorrectPassword){
     Navigate('./dashboard')
      
    }
    else{
      alert('email or password is incorrect')
    }
    
  }
  
  return (
    <>
    <div className="login-outer">

      <div className="login-div">

        <h1>Login</h1>

        <p>Enter your Email and password</p>

        <input type="email" placeholder='Enter your email' className='input-box' onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder='Enter your password' className='input-box' onChange={(e)=>setpassword(e.target.value)} />

        <a href="#">forgot password</a>

        <button className='login-btn' onClick={handlelogin}>Login</button>

      </div>

    </div>
    </>
  )
}

export default Login