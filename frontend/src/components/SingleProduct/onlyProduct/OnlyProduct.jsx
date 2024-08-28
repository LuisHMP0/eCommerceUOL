import React, { useEffect, useState } from 'react'
import './OnlyProduct.css'
import faceImg from './imgs/facebook.svg'
import linkedinImg from './imgs/linkedin.svg'
import twitterImg from './imgs/twitter.svg'
import { useNavigate, useParams } from 'react-router-dom'
import RelatedProducts from '../RelatedProducts/RelatedProducts'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../store/cart/cartSlice'
import { toast, Bounce } from 'react-toastify'

const OnlyProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [clickCount, setClickCount] = useState(0);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const notifySuccess = () => toast.success("Product added to cart!", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,  
  });

  const notifyError = () => toast.error('Product out of stock.', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR').format(price);
  };

  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = () => {
    if (product) {
      const cartItem = cartItems.find(item => item.id === product.id);
      const currentQuantityInCart = cartItem ? cartItem.quantity : 0;

      if (currentQuantityInCart + count > product.stock) {
        notifyError()
        return;
      }
      dispatch(addItem({ product, quantity: count }));
      setCount(1);
      notifySuccess()
    }
  }

  const loadMoreRelatedProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}?page=${page + 1}&limit=4`);
      const data = await response.json();
      setRelatedProducts((prev) => [...prev, ...data.relatedProducts]);
      setPage(page + 1);

      setClickCount(prevCount => {
        const newCount = prevCount + 1;

        if (newCount >= 2) {
          navigate('/');
        }

        return newCount
      })

    } catch (error) {
      console.error('Error fetching more related products:', error);
    }
  };

  
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}?page=1&limit=4`);
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
      <div className='starContainer'>
      <FontAwesomeIcon className='starGold' icon={faStar} />
      <FontAwesomeIcon className='starGold' icon={faStar} />
      <FontAwesomeIcon className='starGold' icon={faStar} />
      <FontAwesomeIcon className='starGold' icon={faStar} />
      <FontAwesomeIcon className='starGold' icon={faStar} />
    
      <p className='Pcustumer'> {product.custumer || '0'} Custumer Review </p>
      </div>
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
          <button className='counterButton' onClick={() => setCount(count - 1) } disabled={count <= 1}> - </button>
          <span className='counterDisplay'> {count} </span>
          <button className='counterButton' onClick={() => setCount(count + 1)}> + </button>
        </div>

        <button className='addToCart' onClick={handleAddToCart} > Add To Cart </button>
        
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

  <RelatedProducts relatedProducts={relatedProducts} onLoadMore={loadMoreRelatedProducts} />
  </>
  )
}

export default OnlyProduct
