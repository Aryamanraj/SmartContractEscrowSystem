import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Loginas from './components/login-as';
import BuyerLogin from './components/buyer-login';
import SellerLogin from './components/seller-login';
import ArbitratorLogin from './components/arbitrator-login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login-as' element={<Loginas />} />
        <Route path='/buyer-login' element={<BuyerLogin />} />
        <Route path='/seller-login' element={<SellerLogin />} />
        <Route path='/arbitrator-login' element={<ArbitratorLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
