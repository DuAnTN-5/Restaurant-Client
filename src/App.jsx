import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './pages/Home'
import Blog from './pages/Blog'
import FavoritePage from './pages/FavoritePage'
import ProductDetail from './pages/Product-detail'
import Contact from './pages/Contact'
import CartProduct from './pages/CartProduct'

function App() {

  return (
    <>
      <Header />

      <Home/>
      {/* <Contact/> */}
      {/* <CartProduct/> */}
      {/* <ProductDetail/> */}
      {/* <Blog/> */}
      <FavoritePage/>
      <Footer/>

    </>
  )
}

export default App
