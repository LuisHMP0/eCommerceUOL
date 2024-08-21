import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import login from './img/loginLogo.png'
import carrinho from './img/carrinhoLogo.png'
import coracao from './img/coracaoLogo.png'
import lupa from './img/lupaLogo.png'
import logoHeader from './img/logoHeader.png'
import { useSelector } from 'react-redux';

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false)

  const handleMenuClick = () => {
    setShowMenuMobile(!showMenuMobile);
  }

  const closeMenu = () => {
    setShowMenuMobile(false)
  }

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  }

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <header className='header'> 
        <div className='logo'>
          <img className='logoHeader' src={logoHeader} alt="LogoCompassHeader" />
          <p> Compass </p>
        </div>
        <nav className='nav1'>
            <ul>
                <li> <Link to='/'> Home </Link> </li>
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
                <li> <a href="#carrinho" onClick={toggleCartVisibility} > <img src={carrinho} alt="logoCarrinho" /> </a> </li>
            </ul>
            {isCartVisible && (
              <>
              <div className='overlay-background' onClick={toggleCartVisibility}></div>
              <div className='cart-overlay'>
                <div className='headerMiniCart'>
                  <h2> Shopping Cart </h2>
                  <button className='toClose' onClick={toggleCartVisibility}> X </button>
                </div>
                <div className='productsInCart'>
                  {cartItems.length > 0 ? (
                    cartItems.map(item => (
                      <div key={item.id} className='cart-item'>
                        <img src={item.imageUrl} alt={item.title} />
                        <div className='cart-item-details'>
                          <p className='cartTitle'>{item.title}</p>
                          <div className='priceAndQuantity'>
                            <p className='cartQuantity'>{item.quantity}</p>
                            <p className='x'> x </p>
                            <p className='cartPrice'>{`Rp. ${item.quantity * item.price}`}</p>
                          </div>
                        </div>
                      </div>))) : (<p className='noItems'>No items in cart</p>)}
                </div>
                <p className='subtotal'></p>
                <div className='buttonsLink'>
                  <button className='Cart'> Cart </button>
                  <button className='Checkout'> Checkout </button>
                  <button className='Comparison'> Comparison </button>
                </div>
              </div>
              </>
            )}
         </nav>
        {!showMenuMobile && (
        <div className='menu-mobile' onClick={handleMenuClick}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
        )}

          <nav className={`mobile-nav ${showMenuMobile ? 'open' : 'closed'}`}>
              <div className='closeMenuDiv'>
                <button onClick={closeMenu} className='closeMenuButton'>X</button>
              </div> 
              <ul className='linksMobile'>
                  <li> <a href="#home"> Home </a> </li>
                  <li> <a href="#shop"> Shop </a> </li>
                  <li> <a href="#about"> About </a> </li>
                  <li> <a href="#contact"> Contact </a> </li>
              </ul>
              <ul className='imgsMobile'>
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