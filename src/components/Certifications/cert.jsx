import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Slide} from 'react-reveal';
import './cert.css';
import { dataDigitalBestSeller } from './data';
import Bg from '../../assets/bg.jpg';


const Credentials = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: Bg,
    }));
  };

  return (
    <div className="cert-container" id="credentials">
        <div className="cert-content">
            <Slide right>
                <div className="cert-content-box">
                  <h5 className="cert-main-title">Learning Mode</h5>
                  <h1 className="cert-title-heading">Certifications & Credentials</h1>
                </div>
            </Slide>
        </div>
        
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1 className="cert-title">{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3 className="cert-para">{item.description}</h3>
              <button className="cert-btn"><a href={item.credentialURL} rel="noreferrer" target="_blank">View More</a></button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Credentials;