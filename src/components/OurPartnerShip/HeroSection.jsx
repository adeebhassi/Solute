import React from 'react';

const HeroSection = ({
  heading1,
  heading2,
  heading3,
  description,
  buttonText,
  buttonLink,
  heroImage,
  heroShapeImage
}) => {
  return (
    <div className="hero-area style-two d-flex align-items-center">
      <div className="container">
        <div className="row hero align-items-center">
          <div className="col-lg-6">
            <div className="hero-contant asfasd">
              <h5>{heading1}</h5>
              <h4>{heading2}</h4>
              <h4>{heading3}</h4>
              <p>{description}</p>
              <div className="solutek-btn">
                <a href={buttonLink} className="btn-2">{buttonText}</a>
              </div>
              <div className="hero-btn-shape bounce-animate-3">
                <img src={heroShapeImage} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-thumb">
              <img src={heroImage} alt="hero-thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
