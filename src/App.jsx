import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReturnPolicy from './pages/sitePage/ReturnPolicy';
import About from './pages/sitePage/about';
import ContactUs from './pages/sitePage/ContactUs';
import ClotheInfo from './pages/clotheInfo/ClotheInfo';
import Clothes from './pages/clothes/Clothes';
import AddClothe from './pages/admin/page/AddClothe';
import UpdateClothe from './pages/admin/page/UpdateClothe';
import ShoesInfo from './pages/shoesInfo/ShoesInfo';
import Shoeses from './pages/shoeses/Shoeses';
import AddShoes from './pages/admin/page/AddShoes';
import UpdateShoes from './pages/admin/page/UpdateShoes';
import BagInfo from './pages/bagInfo/BagInfo';
import Bags from './pages/bags/Bags';
import AddBag from './pages/admin/page/AddBag';
import UpdateBag from './pages/admin/page/UpdateBag';
import AccessoryInfo from './pages/accessoryInfo/AccessoryInfo';
import Accessories from './pages/accessories/Accessories';
import AddAccessory from './pages/admin/page/AddAccessory';
import UpdateAccessory from './pages/admin/page/UpdateAccessory';






function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
          <Route path="/clotheinfo/:id" element={<ClotheInfo />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/shoesinfo/:id" element={<ShoesInfo />} />
          <Route path="/shoeses" element={<Shoeses />} />
          <Route path="/baginfo/:id" element={<BagInfo />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/accessoryinfo/:id" element={<AccessoryInfo />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addclothe" element={
            <ProtectedRoutesForAdmin><AddClothe /></ProtectedRoutesForAdmin>} />
          <Route path="/updateclothe" element={
            <ProtectedRoutesForAdmin><UpdateClothe /></ProtectedRoutesForAdmin>} />
          <Route path="/addshoes" element={
            <ProtectedRoutesForAdmin><AddShoes /></ProtectedRoutesForAdmin>} />
          <Route path="/updateshoes" element={
            <ProtectedRoutesForAdmin><UpdateShoes /></ProtectedRoutesForAdmin>} />
          <Route path="/addbag" element={
            <ProtectedRoutesForAdmin><AddBag /></ProtectedRoutesForAdmin>} />
          <Route path="/updatebag" element={
            <ProtectedRoutesForAdmin><UpdateBag /></ProtectedRoutesForAdmin>} />
          <Route path="/addaccessory" element={
            <ProtectedRoutesForAdmin><AddAccessory /></ProtectedRoutesForAdmin>} />
          <Route path="/updateaccessory" element={
            <ProtectedRoutesForAdmin><UpdateAccessory /></ProtectedRoutesForAdmin>} />
          <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>

  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))

  if (admin.user.email === 'maya11@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
