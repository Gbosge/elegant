import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Register from './component/Pages/Register';
import Login from './component/Pages/Login';
import Reset from './component/Pages/Reset';
import Productlist from './component/Product/Productlist'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    
    <Route path='/' element={<Contact/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/reset' element={<Reset/>}/>
    </Routes>
    <Productlist/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}
export default App;

 