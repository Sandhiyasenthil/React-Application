import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Header from './Header';
import Product from './Product';

function App() {
  return (
    <div>

      <Router>
       

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/ethnicwear" element={<Product></Product>}/>
          <Route path="/header" element={<Header></Header>}/>
        </Routes> 

      </Router>
    </div>

  );
}

export default App;