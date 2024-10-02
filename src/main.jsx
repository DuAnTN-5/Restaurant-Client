// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx';

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
