import React from 'react'
import { Navbar, Sidebar, Footer } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="checkout"
          element={
            // <PrivateRoute>
            // </PrivateRoute>
            <Checkout />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Error />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
