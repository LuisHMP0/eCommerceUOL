import React, { useEffect, useState } from 'react'
import './OnlyProduct.css'
import faceImg from './imgs/facebook.svg'
import linkedinImg from './imgs/linkedin.svg'
import twitterImg from './imgs/twitter.svg'
import { useParams } from 'react-router-dom'
import RelatedProducts from '../RelatedProducts/RelatedProducts'

const OnlyProduct = () => {

  const [count, setCount] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR').format(price);
};

  
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        setProduct(data.product);
        setRelatedProducts(data.relatedProducts);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }  


  return (
  <>
  <section className='rectangle'> 
    <p className='homeEshop'>Home </p> {`>`}
    <p className='homeEshop'>Shop </p> {`>`}
    <p className='propsTitle'> {product.title || 'titleUndefined'} </p>
  </section>

  <section className='product'>
    <div className='forImages'>
      <img src={product.img1} alt='imgProduct01'></img>
      <img src={product.img2} alt='imgProduct02'></img>
      <img src={product.img3} alt='imgProduct03'></img>
      <img src={product.img4} alt='imgProduct04'></img>
    </div>
    <div className='oneImage'>
      <img src={product.mainImg} alt='mainImgProduct'></img>
    </div>
    <div className='productData'>

      <h1> {product.title || 'titleUndefined'} </h1>
      <p className='Pprice'> Rp {formatPrice(product.price) || 'priceUndefined'} </p>
      <p className='Pcustumer'> {product.custumer || '0'} Custumer Review </p>
      <p className='Pdescription'> {product.description} </p>
      <p className='Psize'> Size </p>

      <div className='sizeButtons'> 
        <button> {product.size} </button>
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
        <p className='sku'> SKU : {product.id || 'SKU Undefined'} </p>
        <p className='category'> Category : {product.category?.name || 'Category Undefined'} </p>
        <p className='tags'> Tags : {product.tags || 'Tags Undefined'} </p>
        <p className='share'> Share: 
        <img src={faceImg} alt='faceImg'></img>
        <img src={linkedinImg} alt='linkedinImg'></img>
        <img src={twitterImg} alt='twitterImg'></img>
        </p>
      </div>
    </div>
  </section>

  <RelatedProducts relatedProducts={relatedProducts} />

  </>
  )
}

export default OnlyProduct
