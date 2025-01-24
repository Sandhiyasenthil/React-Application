import React from 'react';
import './Home.css';
import Footer from './Footer';
import Header from './Header';

export default function HomePage() {
  return (
    <div className='home-container'>
      <div className='home-header'>
      <Header />
    
      </div>
     
      {/* <div className='home-center'>
        <div className='home-center-heading'>
        <h1> Welcome to the Shopy World! </h1>
        </div>
        <div className='home-center-image'>
          <img src="homepage-dress.jpg"></img>
        </div>
        
       </div> */}
     <div class="home-center-section">
      <div className='home-center-section-imagecontainer-1'>
          <div className='image-1-container'>
          <img src="homepage-images/homepage-dress1.jpg"></img>
          </div>
          <div class="content--container">
          <p class="subtitle">CASUAL & EVERYDAY</p>
          <h1>Effortlessly Blend Comfort & Style!</h1>
          <p class="description">
          Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
          </p>
          <button >VIEW COLLECTION</button>
         </div>
       
      </div>
      <div className='home-center-section-imagecontainer-2'>
         <div className='image-2-container'>
            <img src="homepage-images/homepage-dress2.jpg"></img>
         </div>
         <div className='image-3-container'>
          <img src="homepage-images/homepage-dress3.jpg"></img>
         </div>
       </div>
       
    </div>
      
      <div className='home-footer'>
      <Footer />
      </div> 
    </div>
  );
}



