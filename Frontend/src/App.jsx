import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Products from './Pages/Products'
import Order from './Pages/Order'
import Analytics from './Pages/Analytics'
import Categories from './Pages/Categories'
import Coupons from './Pages/Coupons'
import Customers from './Pages/Customers'

const App = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/coupons' element={<Coupons />} />
          <Route path='/customers' element={<Customers />} />

        </Routes>
      </Router>

    </>
  )
}

export default App