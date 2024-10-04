import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Contact from './pages/Contact.jsx';
import CartProduct from './pages/CartProduct.jsx';
import FavoritePage from './pages/FavoritePage.jsx';
import ProductDetail from './pages/Product-detail.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<CartProduct />} /> 
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  </Router>
);
