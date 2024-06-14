import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'> 
        <div className='logo'>
          <img className='logoHeader' src="src/components/Header/img/Meubel House_Logos-05.png" alt="LogoCompassHeader" />
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
                <li> <a href="#login"> <img src="src/components/Header/img/loginLogo.png" alt="loginLogo" /> </a> </li>
                <li> <a href="#lupa"> <img src="src/components/Header/img/lupaLogo.png" alt="logoLupa" /> </a> </li>
                <li> <a href="#coracao"> <img src="src/components/Header/img/coracaoLogo.png" alt="logoCoracao" /> </a> </li>
                <li> <a href="#carrinho"> <img src="src/components/Header/img/carrinhoLogo.png" alt="logoCarrinho" /> </a> </li>
            </ul>
         </nav>
        
    </header>
  )
}

export default Header