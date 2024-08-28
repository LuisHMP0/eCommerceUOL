import React from 'react'
import './Checkout.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cart/cartSlice';
import { toast, Bounce } from 'react-toastify'

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        zipCode: '',
        country: '',
        streetAddress: '',
        city: '',
        province: '',
        addOnAddress: '',
        emailAddress: '',
        additionalInfo: '',
    });
    const cartItems = useSelector((state) => state.cart.items);
    const [activeId, setActiveId] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const notifyErrorCheckout = () => toast.error('Checkout with invalid data, please check and try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const notifySuccessCheckout = () => toast.success('Checkout successful!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

    const handleClick = (id) => {
      setActiveId(id === activeId ? null : id); 
    };

    const formRef = useRef()

    const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    };

    const handleSubmit = async (e) => {
        if (formRef.current) {
            formRef.current.submit()
        }
        e.preventDefault();
    
        const token = localStorage.getItem('token');

    try {
        const response = await fetch('http://localhost:3000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
            notifySuccessCheckout()
            dispatch(clearCart());
            navigate('/')
        } else {
            const errorData = await response.json(); 
            notifyErrorCheckout();
            console.error('Error during checkout:', errorData);
        }

        } catch (error) {
            console.error('Request error:', error);
        }
    };

  return (
    <>
    <section className='checkoutContainer'>
        <div className='billingDetailsContainer'>
            <h2> Billing details </h2>
            <form onSubmit={handleSubmit} className='rest'>
                <div className='nameCheckout'>

                    <div className='firstNameDiv'>
                        <label className='firstName' htmlFor='firstName'>First Name</label>
                        <input type='text' name='firstName' className='firstNameInput' value={formData.firstName} onChange={handleChange} />
                    </div>

                    <div className='lastNameDiv'>
                        <label className='lastName' htmlFor='lastName'>Last Name</label>
                        <input type='text'name='lastName'className='lastNameInput'value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>

                <label htmlFor='companyName'>Company Name Optional</label>
                <input className='inputRest' type='text' name='companyName' value={formData.companyName} onChange={handleChange}/>

                <label htmlFor='zipCode'>ZIP code</label>
                <input className='inputRest' type='text' name='zipCode' value={formData.zipCode} onChange={handleChange} />

                <label htmlFor='country'>Country / Region</label>
                <input className='inputRest' type='text' name='country' value={formData.country} onChange={handleChange} />

                <label htmlFor='streetAddress'>Street address</label>
                <input className='inputRest' type='text' name='streetAddress' value={formData.streetAddress} onChange={handleChange}/>

                <label htmlFor='city'>Town / City</label>
                <input className='inputRest' type='text' name='city' value={formData.city} onChange={handleChange}/>

                <label htmlFor='province'>Province</label>
                <input className='inputRest' type='text' name='province' value={formData.province} onChange={handleChange}/>

                <label htmlFor='addOnAddress'>Add-on address</label>
                <input className='inputRest' type='text' name='addOnAddress' value={formData.addOnAddress} onChange={handleChange}/>

                <label htmlFor='emailAddress'>Email address</label>
                <input className='inputRest' type='email' name='emailAddress' value={formData.email} onChange={handleChange}/>

                <label htmlFor='additionalInfo'></label>
                <input className='inputRest' type='text' name='additionalInfo' placeholder='Additional information' value={formData.additionalInfo} onChange={handleChange}/>

            </form>
        </div>
        <div className='cartCheckoutContainer'>

                    <> 
                    <div className='cartCheckout'>
                        <p> Product </p>
                        <p> Subtotal </p>
                    </div>
                    {cartItems.map(item => (
                    <div className='productsCheckout'>
                        <p className='titleProductCheckout'> {item.title} </p>
                        <p className='subtotalProductCheckout'> Rp. {item.price} </p>
                    </div>
                    ))}
                    <div className='subtotalNoDiscount'>
                        <p>Subtotal</p>
                        <p className='subNoDiscount'> Rp. {total} </p>
                    </div>
                    <div className='totalCheckout'>
                        <p className=''> Total </p>
                        <p className='priceTotalCheckout'> Rp. {total} </p>
                    </div>
                    </>

            <div className='paymentMethod'>

                <div className='paymentMethod01'>
                    <button className={`ball ${activeId === 'paymentMethod01' ? 'active' : ''}`} onClick={() => handleClick('paymentMethod01')}></button>
                    <p>Direct Bank Transfer</p>
                </div>
                {activeId === 'paymentMethod01' && ( <p className='descriptionPayment'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p> )}

                <div className='paymentMethod02'>
                    <button className={`ball ${activeId === 'paymentMethod02' ? 'active' : ''}`} onClick={() => handleClick('paymentMethod02')}></button>
                    <p>Direct Bank Transfer</p>
                </div>
                {activeId === 'paymentMethod02' && ( <p className='descriptionPayment'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p> )}

                <div className='paymentMethod03'>
                    <button className={`ball ${activeId === 'paymentMethod03' ? 'active' : ''}`} onClick={() => handleClick('paymentMethod03')}></button>
                    <p>Cash On Delivery</p>
                </div>
                {activeId === 'paymentMethod03' && ( <p className='descriptionPayment'>Choose the Cash On Delivery option to pay at the time of delivery. Please ensure you have the exact amount ready, as our delivery personnel may not carry change. Your order will be processed and shipped promptly, and payment will be collected when the product arrives at your address.</p> )}

                <p className='pPrivacyPolices'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='privacyPolice'>privacy policy.</span> </p>
                <button className='makeCheckout' onClick={handleSubmit}> Make Payment </button>
            </div>
        </div>

    </section>
    </>
  )
}

export default Checkout