import React from 'react';
import service5 from '../../assets/images/service5.png';
import service7 from '../../assets/images/service7.png';
import service8 from '../../assets/images/service8.png';
// Import placeholder image
// import servicePlaceholder from '../../assets/images/service-placeholder.png';

const ServiceArea = ({ servicesData }) => {
  if (!servicesData || servicesData.length === 0) {
    return <p>No services available.</p>;
  }

  return (
    <div className="sservice-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h5 className="section-sub-title">Platform Benefits for Buyers / Vendors / Industry</h5>
              <h1 className="section-main-title" style={{ fontSize: '30px' }}>How Professional Services Drive</h1>
              <h1 className="section-main-title" style={{ fontSize: '30px' }}>
                Success for <span>All.</span>
              </h1>
            </div>
          </div>

          {/* Render sections dynamically */}
          {['Buyers', 'Vendors', 'Industry'].map((section) => (
            <React.Fragment key={section}>
              <div className="col-lg-12 mb-3">
                <div className="section-title">
                  <h5 className="section-sub-title">Platform Benefits for {section}</h5>
                </div>
              </div>
              {servicesData
                .filter((service) => service.category === section)
                .map((service, index) => (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                    <div className="service-single-box servicesdseds">
                      <div className="service-icon">
                        <img src={service.image || servicePlaceholder} alt={service.title} />
                      </div>
                      <div className="service-content">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-text">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </React.Fragment>
          ))}
        </div>
        <div className="service-shape bounce-animate3">
          <img src={service5} alt="service5" />
        </div>

        <div className="service-shape2">
          <img src={service7} alt="service7" />
        </div>

        <div className="service-shape3 bounce-animate4">
          <img src={service8} alt="service8" />
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;

// import React from 'react';
// import ServiceArea from './ServiceArea';

// // Dynamic data defined in the page
// const servicesData = [
//   {
//     title: 'Kashmiri Products',
//     description: 'Certified crafts with Geographical Indication (GI) tags and guaranteed authenticity.',
//     image: '/images/service1.png',
//     category: 'Buyers',
//   },
//   {
//     title: 'Shopping Experience',
//     description: 'Advanced search filters, curated collections, and tailored product recommendations.',
//     image: '/images/service2.png',
//     category: 'Buyers',
//   },
//   {
//     title: 'Global Market Access',
//     description: 'Showcase products to a worldwide audience through a high-traffic e-commerce platform.',
//     image: '/images/service3.png',
//     category: 'Vendors',
//   },
//   {
//     title: 'Enhanced Branding',
//     description: 'Dedicated vendor pages with storytelling and marketing support to build credibility.',
//     image: '/images/service4.png',
//     category: 'Vendors',
//   },
//   {
//     title: 'Craftsmanship',
//     description: 'Ensures quality control and compliance with international standards for Kashmiri crafts.',
//     image: '/images/service5.png',
//     category: 'Industry',
//   },
//   {
//     title: 'Collaboration Opportunities',
//     description: 'Builds a strong ecosystem connecting artisans, businesses, and global buyers.',
//     image: '/images/service6.png',
//     category: 'Industry',
//   },
// ];

// const ParentComponent = () => {
//   return (
//     <div>
//       <ServiceArea servicesData={servicesData} />
//     </div>
//   );
// };

// export default ParentComponent;

