import React from 'react'
import './Header.css'
import login from './img/loginLogo.png'
import carrinho from './img/carrinhoLogo.png'
import coracao from './img/coracaoLogo.png'
import lupa from './img/lupaLogo.png'
import logoHeader from './img/logoHeader.png'

const Header = () => {
  return (
    <header className='header'> 
        <div className='logo'>
          <img className='logoHeader' src={logoHeader} alt="LogoCompassHeader" />
          <p> Compass </p>
        </div>
        <nav className='nav1'>
            <ul>
                <li> <a href="#home"> Home </a> </li>
                <li> <a href="#shop"> Shop </a> </li>
                <li> <a href="#about"> About </a> </li>
                <li> <a href="#contact"> Contact </a> </li>
            </ul>
         </nav>
         <nav className='nav2'>
            <ul>
                <li> <a href="#login"> <img src={login} alt="loginLogo" /> </a> </li>
                <li> <a href="#lupa"> <img src={lupa} alt="logoLupa" /> </a> </li>
                <li> <a href="#coracao"> <img src={coracao} /> </a> </li>
                <li> <a href="#carrinho"> <img src={carrinho} alt="logoCarrinho" /> </a> </li>
            </ul>
         </nav>
        
    </header>
  )
}

export default Header