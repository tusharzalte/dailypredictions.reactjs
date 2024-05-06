import React from "react";
import Logo from './Navbar/Logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Landing.css';  // Make sure the path matches your CSS file's actual location

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={Logo} alt="Centered Image" style={{ maxWidth: '70%', maxHeight: '75%' }} />
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="slide-container">
              <div className="image-container">
                <img src={d.img}  className="slide-image"/>
              </div>
              <div className="content-section">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div> 
    </div>
  );
};

const data = [
  {
    name: `Dashboard`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit Samet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Short-term`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Medium-term`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }
];

export { Landing };
