import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decrement, increment, removeItem } from '../../store/cart/cartSlice';
import './Cart.css'
import trash from './lixeira.png'

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
                <img className='productImage' src={item.src} alt={item.title} />
                <p> {item.title} </p>
                <p> Rp. {item.price} </p>
                <div className='quantityContainer'>
                  <button className='increment' onClick={() => dispatch(decrement(item.id))} disabled={item.quantity <= 1}> - </button>
                  <span className='spanQuantity'> {item.quantity} </span>
                  <button className='decrement' onClick={() => dispatch(increment(item.id))}> + </button>
                </div>
                <p> Rp. {item.quantity * item.price} </p>
                <img className='trash' src={trash} alt="trash-remove" onClick={() => dispatch(removeItem(item.id))} />
              </div>
            ))
          ): <p>No items in cart </p>}
        </div>
      </div>
      <div className='cartTotais'>
        <h2> Cart Totais </h2>
        <p className='subtotalCartMain'> Subtotal </p>
        <p className='total'> Total </p>
        <button className='checkout'> Check Out </button>
      </div>
    </section>
    </>
  )
}

export default Cart