import React from 'react'
import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }) 
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          throw new Error(data.message || 'Erro desconhecido');
        });
      }
      navigate('/')
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error.message);
      alert(`${error.message}: Invalid email or password, please try again. `)
    });
  };

  return (
    <>
    <section className='sectionLoginContainer'>
      <div className='loginContainer'>
        <h1 className='h1Login'> Welcome back! </h1>
        <p className='pLogin'> Enter your Credentials to access your account </p>
        <form onSubmit={handleSubmit}>
          <div className='emailField'>
            <label className='labelEmail' htmlFor='email'>Email address</label>
            <input 
              type='email'
              placeholder='Enter your email'
              id='email'
              className='emailInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='passwordField'> 
            <label className='labelPassword' htmlFor='password'> Password </label>
            <input 
              type='password'
              placeholder='Enter your password'
              id='password'
              className='passwordInput'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='submitLogin' type='submit'> Login </button>
        </form>
        <p className='navigateToSignup'>
          Don’t have an account?
          <a href='/signup'> Sign Up </a>  
        </p>
      </div>

      <div className='imgBeSide'>
      </div>
    </section>
    
    </>
  )
}

export default Login