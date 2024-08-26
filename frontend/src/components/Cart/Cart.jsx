import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decrement, increment, removeItem } from '../../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
import trash from './lixeira.png'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const navigate = useNavigate()

  return (
    <>
    <section className='cartContainer'>
      <div className='columsContainer'> 
        <div className='colums'>
          <p className='productColum'> Product </p>
          <p className='priceColum'> Price </p>
          <p className='quantityColum'> Quantity </p>
          <p className='subtotalColum'> Subtotal </p>
        </div>
        <div className='productsInCart'>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className='item'>
                <img className='productImage' src={item.src} alt={item.title} />
                <p className='pTitleId'> {item.title} </p>
                <p className='pPriceId'> Rp. {item.price} </p>
                <div className='quantityContainer'>
                  <button className='increment' onClick={() => dispatch(decrement(item.id))} disabled={item.quantity <= 1}> - </button>
                  <span className='spanQuantity'> {item.quantity} </span>
                  <button className='decrement' onClick={() => dispatch(increment(item.id))}> + </button>
                </div>
                <p className='subtotalId'> Rp. {(item.quantity * item.price).toFixed(2)} </p>
                <img className='trash' src={trash} alt="trash-remove" onClick={() => dispatch(removeItem(item.id))} />
              </div>
            ))
          ): <p className='noItemsMain'>No items in cart </p>}
        </div>
      </div>
      <div className='cartTotais'>
        <h2> Cart Totais </h2>
        <div className='subtotalCartMainContainer'>
          <p className='subtotalCartMain'> Subtotal </p>
          <p className='subtotalCartMainValue'> {total} </p>
        </div>
        <div className='totalCartMainContainer'>
          <p className='totalCartMain'> Total </p>
          <p className='totalCartMainValue'> {total} </p>
        </div>
        <button onClick={() => navigate('/checkout')} className='checkout'> Check Out </button>
      </div>
    </section>
    </>
  )
}

export default Cart