import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './page/home/component/Home'
import ProductDetail from './page/products/component/ProductDetail'
import Login from './components/User/Login'
function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
