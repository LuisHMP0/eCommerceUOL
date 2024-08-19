import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Home/Header/Header'
import Section01 from './components/Home/Section01/Section01'
import Produtos from './components/Home/Produtos/Produtos'
import Section03 from './components/Home/Section03/Section03'
import Footer from './components/Home/Footer/Footer'
import OnlyProduct from './components/SingleProduct/onlyProduct/OnlyProduct'

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

function App() {

  return (
    <>
    <BrowserRouter> 
      <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
