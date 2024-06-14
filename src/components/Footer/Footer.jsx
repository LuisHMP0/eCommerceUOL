import React from 'react'
import './Footer.css'
import { useState } from 'react'


const Footer = () => {
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    
    {/* Validação regex */}
    const validateEmail = (email) => {
      // Regex pattern for validating an email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const Submit = (event) => {
        event.preventDefault();
        if (validateEmail(email)) {
            setErrorMessage('');
            alert('Email is valid')
        } else {
            setErrorMessage('Email is not valid, please enter a valid email address.')
        }
    }
    
  return (
    <footer>
        <section className='parteDeCima'>
            <div className='footerDiv'>
                <h1>footer.</h1>
                <p> Rua Alexandre Dumas, 1711 - 6º <br/> andar - Chácara Santo Antônio, <br/> São Paulo - SP, 04717-004 </p>
            </div>
            <div className='links'>
                <h2>Links</h2>
                <ul> 
                    <li> <a href="#home">Home</a> </li>
                    <li> <a href="#shop">Shop</a> </li>
                    <li> <a href="#about">About</a> </li>
                    <li> <a href="#contact">Contact</a> </li>
                </ul>
            </div>
            <div className='help'>
                <h2>Help</h2>
                <ul>
                    <li> <a href="#paymentOptions">Payment Options</a> </li>
                    <li> <a href="#returns">Returns</a> </li>
                    <li> <a href="#privacyPolicies">Privacy Policies</a> </li>
                </ul>
            </div>
            <div className='newsletter'>
                <h2>Newsletter</h2>
                <div className='inputEmail'>
                    <input 
                    type='email' 
                    name='email' 
                    id='email' 
                    className='email' 
                    placeholder='Enter Your Email Address' 
                    value={email} 
                    onChange={handleEmailChange}/>
                    <button type='submit' className='submit' onClick={Submit}> SUBSCRIBE </button>
                </div>
                {errorMessage && <p className='error'> {errorMessage} </p>}
            </div>
        </section>
        <p className='compass'> 2024 Compass UOL </p>
    </footer>
    
    
  )
}

export default Footer