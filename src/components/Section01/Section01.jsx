import React from 'react'
import './Section01.css'
import background from './img/Rectangle1.png'

const Section01 = () => {
  return (
    <section className='sec01' style={ { backgroundImage: `url(${background})`} }> 
        <h1> Shop </h1>
        <div>
          <p className='Home'> Home &gt; </p>
          <p className='Shop'> Shop </p>
        </div>
    </section>
  )
}

export default Section01