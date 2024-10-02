import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/Product-detail'

function App() {

  return (
    <>
      <Header />
      {/* <HomePage/> */}
      <ProductDetail/>
      <Footer/>

    </>
  )
}

export default App
