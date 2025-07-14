import React from 'react'
import './css/bootstrap.css'
import './css/style.css'
import './css/animate.min.css'
import './css/bootstrap-grid.css'
import './css/bootstrap-grid.min.css'
import './css/bootstrap-reboot.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.min.css'
import './css/style.min.css'
import 'font-awesome/css/font-awesome.min.css';
import './css/Mycss.css'
import SharedLayout from './Components/SharedLayout/SharedLayout'
import HomePage from './Components/Home/HomePage'
import ProductsPage from './Components/Products/ProductsPage'
import ContactUs from './Components/ContactUs/ContactUs'
import CartPage from './Components/MyCart/CartPage'
import ShopDetailPage from './Components/ShopDetail/ShopDetailPage'
import { Route, Routes } from 'react-router'
import SignIn from './Components/Account/SignIn'
import AboutUs from './Components/AboutUs/AboutUs'
import AdminDashBoard from './Components/AdminDashboard/AdminDashBoard'
import AddProduct from './Components/AdminDashboard/AddProduct'
import UpdateOrderStatus from './Components/AdminDashboard/UpdateOrderStatus'
import LogIn from './Components/Account/LogIn'
import DeleteProduct from './Components/AdminDashboard/DeleteProduct'
import LogInPage from './Components/AdminDashboard/LogInPage'
import BrowseAllOrders from './Components/AdminDashboard/BrowseAllOrders'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='Shop' element={<ProductsPage />} />
          <Route path='myCart' element={<CartPage />} />
          < Route path='contact' element={<ContactUs />} />
          <Route path='Shop/ShopDetailPage/:productName' element={<ShopDetailPage />} />
          < Route path='signIn' element={<SignIn />} />
          < Route path='LogIn' element={<LogIn />} />
          < Route path='AdminDashBoard' element={<AdminDashBoard />} />
          < Route path='AddProduct' element={<AddProduct />} />
          < Route path='UpdateOrderStatus' element={<UpdateOrderStatus />} />
          < Route path='DeleteProduct' element={<DeleteProduct />} />
          < Route path='LogInPage' element={<LogInPage  />} />
          < Route path='AboutUs' element={<AboutUs />} />
          < Route path='BrowseAllOrders' element={<BrowseAllOrders />} />
        </Route >
      </Routes >
    </>
  )
}

export default App
