import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/css/output.css";
import "./assets/css/style.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/slick.min.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
