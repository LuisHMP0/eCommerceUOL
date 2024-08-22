import React from 'react'
import './Section01.css'
import background from './img/Rectangle1.png'

const Section01 = (props) => {
  return (
    <section className='sec01' style={ { backgroundImage: `url(${background})`} }> 
        <h1> {props.h1 || 'Shop'} </h1>
        <div>
          <p className='Home'> Home &gt; </p>
          <p className='Shop'> {props.h1 || 'Shop'} </p>
        </div>
    </section>
  )
}

export default Section01