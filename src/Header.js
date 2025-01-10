
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div>
      <header className='header-container'>
        <nav className='navbar'>
          <Link to="/home">Home</Link>&nbsp;
          
          <Link to="/signup">Signup</Link>&nbsp;
        </nav>
      </header>
    </div>
  );
}