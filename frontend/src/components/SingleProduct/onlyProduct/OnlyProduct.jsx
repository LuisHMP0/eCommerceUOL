import React, { useState } from 'react'
import './OnlyProduct.css'
import faceImg from './imgs/facebook.svg'
import linkedinImg from './imgs/linkedin.svg'
import twitterImg from './imgs/twitter.svg'

const OnlyProduct = (props) => {

  const [count, setCount] = useState(1);
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
  <>
  <section className='rectangle'> 
    <p className='homeEshop'>Home </p> {`>`}
    <p className='homeEshop'>Shop </p> {`>`}
    <p className='propsTitle'> {props.title || 'titleUndefined'} </p>
  </section>

  <section className='product'>
    <div className='forImages'>
      <img src={props.img1} alt='imgProduct01'></img>
      <img src={props.img2} alt='imgProduct02'></img>
      <img src={props.img3} alt='imgProduct03'></img>
      <img src={props.img4} alt='imgProduct04'></img>
    </div>
    <div className='oneImage'>
      <img src={props.mainImg} alt='mainImgProduct'></img>
    </div>
    <div className='productData'>

      <h1> {props.title || 'titleUndefined'} </h1>
      <p className='Pprice'> Rp {props.price || 'priceUndefined'} </p>
      <p className='Pcustumer'> {props.custumer || '0'} Custumer Review </p>
      <p className='Pdescription'> {props.description || 'aaaaaaaaaaaaaaaaaaaaa'} </p>
      <p className='Psize'> Size </p>

      <div className='sizeButtons'> 
        <button> {props.size} </button>
      </div>

      <p className='Pcolor'> Color </p>

      <div className='colorButtons'> 
        <button className='color01'></button>
        <button className='color02'></button>
        <button className='color03'></button>
      </div>

      <div className='quantityProducts'>

        <div className='counter'>
          <button className='counterButton' onClick={decrement} disabled={count <= 1}> - </button>
          <span className='counterDisplay'> {count} </span>
          <button className='counterButton' onClick={increment}> + </button>
        </div>

        <button className='addToCart'> Add To Cart </button>
        
      </div>

      <div className='additionalInformation'>
        <p className='sku'> SKU : {props.sku || 'SKU Undefined'} </p>
        <p className='category'> Category : {props.category || 'Category Undefined'} </p>
        <p className='tags'> Tags : {props.tags || 'Tags Undefined'} </p>
        <p className='share'> Share: 
        <img src={faceImg} alt='faceImg'></img>
        <img src={linkedinImg} alt='linkedinImg'></img>
        <img src={twitterImg} alt='twitterImg'></img>
        </p>
      </div>
    </div>
  </section>

  <section className='relatedProducts'>
    <h2> Related Products </h2>
  </section>
  </>
  )
}

export default OnlyProduct
