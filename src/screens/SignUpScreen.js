import React, { useRef } from 'react'
import  { auth }  from '../firebase'
import { useNavigate } from 'react-router-dom';
import './SignUpScreen.css'

function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
 const history = useNavigate();

  const register = (e) => {
    e.preventDefault();
    history('/')

    auth
    .createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).catch((error) =>{
      alert(error.message)
    });
  }

  const signIn = (e) => {
    e.preventDefault()
    history('/')
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).catch((error) => alert(error.message))
  }

  return (
    <div className='signupScreen'>
    <form>
      <h1>Sign In</h1>
      <input ref={emailRef} type="email" placeholder='Email' />
      <input ref={passwordRef} type="password" placeholder='Password' />
      <button type='submit' onClick={signIn}> Sign In </button>

      <h4>
      <span className='signupScreen__gray'>New to Netflix ?</span>
      <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
      </h4>
    </form>
    </div>
  )
}

export default SignUpScreen