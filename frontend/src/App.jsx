import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Home/Header/Header'
import Section01 from './components/Home/Section01/Section01'
import Produtos from './components/Home/Produtos/Produtos'
import Section03 from './components/Home/Section03/Section03'
import Footer from './components/Home/Footer/Footer'
import OnlyProduct from './components/SingleProduct/onlyProduct/OnlyProduct'
import RelatedProducts from '../src/components/SingleProduct/RelatedProducts/RelatedProducts'
import Cart from '../src/components/Cart/Cart'

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

function App() {

  return (
    <>
    <BrowserRouter> 
      <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
