import React from 'react'
import './Product.css';
import Footer from './Footer';
import Header from './Header';
function Product() {
  return (
    <div>
      <div className='product-header'>
            <Header />
          
            </div>
    
      <div className="product-details">
        <div className='product-image-container'>
              <img src="/product-images/dress1.jpg" alt="Dress 1" className="product-dress-image" />
              <h3>dress</h3>
              <p>Rs.1500</p>
              <button>Add to cart</button>
        </div>
        <div className='product-image-container'>
              <img src="/product-images/dress2.jpg" alt="Dress 2" className="product-dress-image" />
              <h3> dress</h3>
              <p>Rs.1500</p>
             <button>Add to cart</button>
        </div>
        <div className='product-image-container'>
              <img src="/product-images/dress3.jpg" alt="Dress 3" className="product-dress-image" />
              <h3> dress</h3>
              <p>Rs.1500</p>
             <button>Add to cart</button>
        </div>
        <div className='product-image-container'>
              <img src="/product-images/dress4.jpg" alt="Dress 4" className="product-dress-image" />
              <h3> dress</h3>
              <p>Rs.1500</p>
             <button>Add to cart</button>
        </div>
        <div className='product-image-container'>
              <img src="/product-images/dress5.jpg" alt="Dress 5" className="product-dress-image" />
              <h3> dress</h3>
              <p>Rs.1500</p>
             <button>Add to cart</button>
        </div>
        <div className='product-image-container'>
              <img src="/product-images/dress6.jpg" alt="Dress 6" className="product-dress-image" />
              <h3> dress</h3>
              <p>Rs.1500</p>
             <button>Add to cart</button>
        </div>
        <div className='product-image-container'>
              <img src="/product-images/dress7.jpg" alt="Dress 7" className="product-dress-image" />
              <h3> dress</h3>
              <p>Rs.1500</p>
             <button>Add to cart</button>
        </div>
        <div className='product-image-container'>
              <img src="/product-images/dress9.jpg" alt="Dress 8" className="product-dress-image" />
              <h3> dress</h3>
              <p>Rs.1500</p>
             <button>Add to cart</button>
        </div>
        <div className='product-image-container'>
              <img src="/product-images/dress9.jpg" alt="Dress 9" className="product-dress-image" />
              <h3> dress</h3>
              <p>Rs.1500</p>
             <button>Add to cart</button>
        </div>
        
        

      </div>
      <div className='product-footer'>
            <Footer />

      </div> 
    </div>
  )
}

export default Product
