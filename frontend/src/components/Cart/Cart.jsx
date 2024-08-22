import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/cart/cartSlice';
import './Cart.css'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);
  const quantityItens = useSelector((state) => state.quantityItens)
  const dispatch = useDispatch()


  return (
    <>
    <section className='cartContainer'>
      <div className='columsContainer'> 
        <div className='colums'>
          <p> Product </p>
          <p> Price </p>
          <p> Quantity </p>
          <p> Subtotal </p>
        </div>
        <div className='productsInCart'>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className='item'>
                <img src={item.src} alt={item.title} />
                <p> {item.title} </p>
                <p> {item.price} </p>
                <div className='quantityContainer'>
                  <button onClick={() => dispatch(decrement(item.id))}> - </button>
                  <span> {item.quantity} </span>
                  <button onClick={() => dispatch(increment(item.id))}> + </button>
                </div>
                <p> {item.quantity * item.price} </p>
              </div>
            ))
          ): <p>No items in cart </p>}
        </div>
      </div>
      <div className='cartTotais'>
        <h2> Cart Totais </h2>
        <p className='subtotal'> Subtotal </p>
        <p className='total'> Total </p>
        <button className='checkout'> Check Out </button>
      </div>
    </section>
    </>
  )
}

export default Cart