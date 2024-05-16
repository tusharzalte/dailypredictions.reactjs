import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css"; // Make sure the path matches your CSS file's actual location

import { Hero } from "../../components";

const Landing = () => {
  const  navigate  = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigateUser = (destination) => {
    navigate(
      `${destination.toLowerCase() === "dashboard" ? "/dashboard" : "/models"}`
    );
  };

  return (
    <div>
      <Hero />
      <div className="carousel-container">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="slide-container">
              <div className="image-container">
                <img src={d.img} className="slide-image" />
              </div>
              <div className="content-section">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center text">{d.review}</p>
                <button
                  onClick={() => navigateUser(d.name)}
                  className="read-more-btn"
                >
                  Read More
                </button>
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
    img: `/assets/dashboard.png`,
    review: `Here you can do load forecasting based on your choice.`,
  },
  {
    name: `Short-Term`,
    img: `/assets/short.png`,
    review: `The time-period of STLF lasts for a few minutes or hours to one-day ahead or a week. STLF aims at economic dispatch and optimal generator unit commitment while addressing real-time control and security assessment.
    `,
  },
  {
    name: `Medium-Term`,
    img: `/assets/medium.png`,
    review: `The time-period of MTLF is a week to one month (possibly two months). MTLF aims at maintenance scheduling, coordination of load dispatch and price settlement so that demand and generation is balanced.`,
  },
];

export { Landing };
