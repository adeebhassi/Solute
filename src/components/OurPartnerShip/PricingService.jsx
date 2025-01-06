import React from "react";

const PricingService = ({
  heading = "Empowering Artisans & Businesses with Flexible Plans", // Default heading
  subheading = "Tailored Plans for Every Stage of Your Growth Journey", // Default subheading
  servicesData = [], // Dynamic services data array
  buttonText = "SIGN UP NOW", // Default button text
}) => {
  return (
    <div className="sservice-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h5 className="section-sub-title">{subheading}</h5>
              <h1 className="section-main-title" style={{ fontSize: "30px" }}>
                {heading}
              </h1>
            </div>
          </div>

          <div className="col-lg-12 mb-3">
            <div className="section-title">
              <h5 className="section-sub-title">
                From Starter to Platinum, We Elevate Your Success at Every Step
              </h5>
            </div>
          </div>

          {/* Render Services Dynamically */}
          {servicesData.length > 0 ? (
            servicesData.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-single-box servicesdseds">
                  <div className="service-icon">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No services available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingService;