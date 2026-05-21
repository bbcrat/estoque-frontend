import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import AddProduct from '../pages/AddProduct'
import EditProduct from '../pages/EditProduct'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  )
}
