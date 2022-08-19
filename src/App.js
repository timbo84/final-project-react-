import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import ProductList from './ProductList'
import Product from './Product'
import ProductForm from './ProductForm';
import Welcome from './Welcome';
import AboutUs from './AboutUs'
import Search from './Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />}>
            
          </Route>
          <Route path="products" element={<ProductList />} >
            <Route path="new" element={<ProductForm />} />
            <Route path=":productId/edit" element={<ProductForm />} />
            <Route path=":productId" element={<Product />} />
            <Route path="*" element={<h1>Product Not Found</h1>} />
          </Route>
          <Route path="search/:filter" element={<Search />} />
          <Route path="new" element={<ProductForm />} >
          </Route>
          <Route path="AboutUs" element={<AboutUs />}></Route>
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
