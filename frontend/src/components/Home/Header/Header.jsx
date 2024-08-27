import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import login from './img/loginLogo.png'
import carrinho from './img/carrinhoLogo.png'
import coracao from './img/coracaoLogo.png'
import lupa from './img/lupaLogo.png'
import logoHeader from './img/logoHeader.png'
import { useSelector, useDispatch } from 'react-redux';
import trash from '../../Cart/CartPage/lixeira.png'
import { removeItem } from '../../../store/cart/cartSlice'
import ConfirmDelete from '../../Cart/ConfirmDelete/ConfirmDelete';


const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showDivLogin, setShowDivLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');
  const isLogged = !!token;

  const handleDelete = async (itemId) => {
    const isConfirmed = await ConfirmDelete();
    if (isConfirmed) {
      console.log(itemId)
      dispatch(removeItem(itemId)); 
    }
  };

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
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleCartClick = () => {
    navigate('/cart')
  }
  const handleLoginClick = () => {
    navigate('/login')
  }

  const alreadyLoggedIn = () => {
    setShowDivLogin(true);
  }

  const logoutClick = () => {
    localStorage.removeItem('token');
  }

  const handleCheckoutClick = () => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/checkout')
    } else {
      navigate('/login')
    }
  }

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
                <li> <a className='loginA' onClick={isLogged ? alreadyLoggedIn : handleLoginClick} > <img src={login} alt="loginLogo" /> </a> </li>
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
                <div className='productsInCartContainer'> 
                <div className='productsInCart'>
                  {cartItems.length > 0 ? (
                    cartItems.map(item => (
                      <div key={item.id} className='cart-item'>
                        <img className='productCartItem' src={item.imageUrl} alt={item.title} />
                        <div className='cart-item-details'>
                          <p className='cartTitle'>{item.title}</p>
                          <div className='priceAndQuantity'>
                            <p className='cartQuantity'>{item.quantity}</p>
                            <p className='x'> x </p>
                            <p className='cartPrice'>{`Rp. ${item.quantity * item.price}`}</p>
                          </div>
                        </div>
                        <img className='trashCartHeader' src={trash} alt='trash' onClick={() => (handleDelete(item.id))} />
                      </div>))) : (<p className='noItems'>No items in cart</p>)}
                </div>
                </div>
                <div className='subtotalContainer'> 
                  <p className='subtotal'> Subtotal </p>
                  <p className='priceSubtotal'>{subtotal}</p>
                </div>
                <div className='buttonsLink'>
                  <button onClick={handleCartClick} className='Cart'> Cart </button>
                  <button onClick={() => handleCheckoutClick()} className='Checkout'> Checkout </button>
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


         {showDivLogin && (
          <>
          <div onClick={() => setShowDivLogin(false)} className='overlay-background'></div>
          <div className='propertiesLogin'>
            <h2 className='nameUser'> Welcome {userName} </h2>
            <p> What do you want? </p>
            <button> Change password </button>
            <button> Change username </button>
            <button> Change email </button>
            <button onClick={() => {logoutClick(); handleLoginClick()}}> Log in with another account </button>
            <button onClick={() => {logoutClick(); setShowDivLogin(false)}}>Log out</button>
          </div>

          </>
         )}
    </header>
  )
}

export default Header