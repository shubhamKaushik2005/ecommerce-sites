import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './views/Home.jsx'
import Products from './views/Products.jsx'
import Card from './views/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Home/> */}
    {/* <Login/> */}
    {/* <Products/> */}
    {/* <Card/> */}
  </StrictMode>
)
