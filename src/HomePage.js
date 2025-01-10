import React from 'react';
import './Home.css';
import Footer from './Footer';
import Header from './Header';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

export default function HomePage() {
  // const images = [
  //   'https://assets0.mirraw.com/images/11845670/ACW8803_zoom.jpg?1694693060',
  //   'https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/781232743/tas328.jpg/images/image2.jpg',
  //   'publihttps://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpgc/images/image3.jpg',
  //   'public/https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpgimages/image4.jpg',
  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  // };

  return (
    <div>
      <Header />

      <div className="homepage">
        <h1>Welcome to Dress Shop</h1>
         {/* <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider> */}
       </div>

      <Footer />
    </div> 
  );
}



