import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import email_icon from './assets/email2.png'
import pwd_icon from './assets/password2.png'
import person from './assets/person2.png'

function Login() {
 

  return (
  <>
  <div className='container'>
     <div className='header'>
      <img src={person} alt=''/> 
      </div>

      <form >
    <div className='inputs'>
      <div className='input'>
        <img src={email_icon} alt="" />
        <input type='email' placeholder='Username' required   className='form-control'/>
      </div>
    </div>

    <div className='inputs'>
      <div className='input'>
        <img src={pwd_icon} alt="" />
        <input type='password' placeholder='password'required className='form-control'/>
      </div>
      
      <label><input type='checkbox'/>Remember me   <button type='submit' className='btn btn-success mt-2'>Login</button></label>
        <a href='#'>Forgot password</a><p>Don't have an account ? <a href='#'>Register</a></p>
                
    </div>
    </form>
    
  </div>

  </>
  )
}

export default Login
