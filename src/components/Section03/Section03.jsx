import React from 'react'
import './Section03.css'
import entrega from './img/entrega'
import suporte from './img/suporte'
import trofeu from './img/trofeu'
import verificado from './img/verificado'

const Section03 = () => {
  return (
    <div className='section03'>
        <img src={trofeu} alt="trofeu" />
        <div className='div01'>
            <p className='pMaior'> High Quality </p>
            <p className='pMenor'> crafted from top materials </p>
        </div>

        <img src={verificado} alt="verificado" />
        <div className='div02'>
            <p className='pMaior'>Warranty Protection</p>
            <p className='pMenor'>Over 2 years</p>
        </div>

        <img src={entrega} alt="entrega" />
        <div className='div03'>
            <p className='pMaior'>Free Shipping</p>
            <p className='pMenor'>Order over 150 $</p>
        </div>

        <img src={suporte} alt="suporte" />
        <div className='div04'>
            <p className='pMaior'>24 / 7 Support</p>
            <p className='pMenor'>Dedicated support</p>
        </div>

    </div>
  )
}

export default Section03