import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Home/Header/Header'
import Section01 from './components/Home/Section01/Section01'
import Produtos from './components/Home/Produtos/Produtos'
import Section03 from './components/Home/Section03/Section03'
import Footer from './components/Home/Footer/Footer'
import OnlyProduct from './components/SingleProduct/onlyProduct/OnlyProduct'
import RelatedProducts from '../src/components/SingleProduct/RelatedProducts/RelatedProducts'
import Cart from '../src/components/Cart/CartPage/Cart'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Checkout from './components/Checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function HomePage() {
  return (
    <>
      <Header />
      <Section01 />
      <Produtos /> 
      <Section03 /> 
      <Footer /> 
    </>
  )
}

function SingleProduct() {
  return (
    <>
      <Header />
      <OnlyProduct />
      <Footer />
    </>
  )
}

function CartPage() {
  return (
    <>
      <Header />
      <Section01 h1='Cart' />
      <Cart />
      <Section03 />
      <Footer />
    </>
  )
}

function CheckoutPage() {
  return (
  <>
    <Header />
    <Section01 h1='Checkout' />
    <Checkout />
    <Footer />
  </>
  )
}

function App() {

  return (
    <>
    <ToastContainer />
    <BrowserRouter> 
      <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup />} /> 
        <Route path='/checkout' element={ <CheckoutPage /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
