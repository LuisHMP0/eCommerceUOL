import React from 'react'
import './Signup.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showErrorMessageSignup, showSuccessMessageSignup } from '../Alert/Alert';

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        showErrorMessageSignup()
        throw new Error(errorData.message || 'Unknown error');
      }

      showSuccessMessageSignup()
      navigate('/login'); 
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <section className='sectionSignupContainer'>
        <div className='signupContainer'>
          <h1 className='h1Signup'> Get Started Now </h1>
          <p className='pSignup'> Enter your Credentials to access your account </p>
          <form onSubmit={handleSubmit}>
            <div className='nameField'>
              <label className='labelName' htmlFor='name'>Name</label>
              <input 
                type='text'
                placeholder='Enter your name'
                id='name'
                className='nameInput'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <button className='submitSignup' type='submit'> Sign Up </button>
          </form>
          <p className='navigateToSignup'>
            Have an account?
            <a onClick={() => navigate('/login')}> Sign in </a>
          </p>
        </div>
        <div className='imgBeSide'></div>  
      </section>    
      </>
  )
}

export default Signup 