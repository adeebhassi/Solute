import React, { useState, useEffect } from 'react';

const CounterAreaManual = ({ countersData, heading,para }) => {
  
  return (
    <div className="counter-area">
      <div className="container">
        <div className="row counter-item">
          
            <div className="" >
              <div className="counter-single-box">
                <div className="counter-content">
                  {/* <span>$</span> */}
                  <h4 className="counter">{heading}</h4>
                  <p style={{fontSize:'27px'}}>{para}</p>
                  {/* <p>Meet retention Period and KPI benchmarks to advance seamlessly through higher Progressive Partnership Tier</p> */}
                  {/* <span className="mt-2 fs-3">{counter.range}</span> */}
                  {/* <p>{counter.planName}</p> */}
                </div>
              </div>
            </div>
         
          {/* Heading Section */}
          <div className="col-lg-12 col-md-12 mt-4 col-sm-12 col-xs-12">
            <div className="text-center font-weight-bold">
              {/* <h4>{heading}</h4> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterAreaManual;












// const CounterPage = () => {
//   const countersData = [
        
//     { target: 30, range: "(1-30)", planName: "Starter Plan" },
//     { target: 179.88, range: "(31-50)", planName: "Basic Plan" },
//     { target: 311.88, range: "(51-70)", planName: "Growth Plan" },
//     { target: 1199.88, range: "(71-85)", planName: "Premium Plan" },
//     { target: 1499, range: "(86-100)", planName: "Elite Plan" },
//     { target: 1999, range: "(100+)", planName: "Platinum Plan" }
//   ];

//   const heading =
//     "Early Adopter Yearly De Koshur Crafts-USA Ecommerce Platform Fees is Zero (2025-26)";

//   return <CounterArea countersData={countersData} heading={heading} />;
// };

// export default CounterPage;
