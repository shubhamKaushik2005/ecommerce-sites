import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Shop from './views/Shop';
import Blog from './views/Blog';
import Detail from './views/Detail';
import Card from './views/Card';
import Wishlist from './views/Wishlist';
import Products from './views/Products';
import Login from './views/Login';



function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/detail/:id?' element={<Detail/>}/>
            <Route path='/card' element={<Card/>}/>
            <Route path='/Wishlist' element={<Wishlist/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/products/:id?' element={<Products/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

