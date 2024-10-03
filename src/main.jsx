// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'
import './index.css'
import HomePage from './pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Router>
    <App>
    <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </App>
    </Router>
   
  // </StrictMode>,
)
