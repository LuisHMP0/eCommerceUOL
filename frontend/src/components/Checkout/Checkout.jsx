import React from 'react'
import './Checkout.css'
import { useState } from 'react';

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

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    };

    const handleSubmit = async (e) => {
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
            console.log('Checkout successful!');
        } 

        } catch (error) {
        console.error('Request error:', error);
        }
  };

  return (
    <section className='checkoutContainer'>
        <div className='billingDetailsContainer'>
            <h2> Billing details </h2>
            <form onSubmit={handleSubmit} className='rest'>
                <div className='nameCheckout'>

                    <div className='firstNameDiv'>
                        <label className='firstName' htmlFor='firstName'>First Name</label>
                        <input 
                        type='text'
                        name='firstName'
                        className='firstNameInput'
                        value={formData.firstName}
                        onChange={handleChange}
                        />
                    </div>

                    <div className='lastNameDiv'>
                        <label className='lastName' htmlFor='lastName'>Last Name</label>
                        <input 
                        type='text'
                        name='lastName'
                        className='lastNameInput'
                        value={formData.lastName}
                        onChange={handleChange}
                        />
                    </div>
                </div>

                <label htmlFor='companyName'>Company Name Optional</label>
                <input type='text' name='companyName' value={formData.companyName} onChange={handleChange}/>

                <label htmlFor='zipCode'>ZIP code</label>
                <input type='text' name='zipCode' value={formData.zipCode} onChange={handleChange} />

                <label htmlFor='country'>Country / Region</label>
                <input type='text' name='country' value={formData.country} onChange={handleChange} />

                <label htmlFor='streetAddress'>Street address</label>
                <input type='text' name='streetAddress' value={formData.streetAddress} onChange={handleChange}/>

                <label htmlFor='city'>Town / City</label>
                <input type='text' name='city' value={formData.city} onChange={handleChange}/>

                <label htmlFor='province'>Province</label>
                <input type='text' name='province' value={formData.province} onChange={handleChange}/>

                <label htmlFor='addOnAddress'>Add-on address</label>
                <input type='text' name='addOnAddress' value={formData.addOnAddress} onChange={handleChange}/>

                <label htmlFor='emailAddress'>Email address</label>
                <input type='email' name='emailAddress' value={formData.email} onChange={handleChange}/>

                <label htmlFor='additionalInfo'></label>
                <input type='text' name='additionalInfo' placeholder='Additional information' value={formData.additionalInfo} onChange={handleChange}/>

                <button className='makeCheckout' type='submit'> Submit </button>
            </form>
        </div>
        <div className='cartCheckoutContainer'>
        </div>
    </section>
  )
}

export default Checkout