
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div>
      <header className='header-container'>
        <div className='navbar'>
          <Link to="/home"> <i class="glyphicon glyphicon-home"></i>  Home</Link>&nbsp;    
          
        </div>
        <div className="search-bar">
            <span className="glyphicon glyphicon-search search-icon"></span>
            <input type="text" placeholder="Search for dress" />
        </div>
        
        <div className="product-menu">
            
              {/* <Link to="/product">Product</Link>&nbsp; */}
              <button className='product-button' >Product</button>
  
           
            <nav className='product-categories'>
              <Link to="/ethnicwear">Ethnic Wear</Link>
              <Link to="/partywear">Party Wear</Link>
              <Link to="/casualwear">Casual Wear</Link>
              <Link to="/winter">Winter Wear</Link>
              <Link to="/kids">Kids</Link>
            </nav>
            
        </div>
        <nav className='signup-navbaar'>
              <Link to="/signup">Signup<i class="glyphicon glyphicon-signup"></i></Link>&nbsp;
        </nav>
      </header>
    </div>
  );
}