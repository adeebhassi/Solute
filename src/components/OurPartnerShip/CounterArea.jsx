import React, { useState, useEffect } from 'react';

const CounterArea = ({ countersData, heading }) => {
  const [counterValues, setCounterValues] = useState(
    countersData.map(() => 0) // Initialize all counters to 0
  );

  useEffect(() => {
    // Function to animate the counter
    const animateCounter = (index, target) => {
      let current = 0;
      const increment = target / 200; 
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounterValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = Math.floor(current); 
          return newValues;
        });
      }, 10); 
    };

  
    countersData.forEach((counter, index) => {
      animateCounter(index, counter.target);
    });
  }, [countersData]); 

  return (
    <div className="counter-area">
      <div className="container">
        <div className="row counter-item">
          {countersData.map((counter, index) => (
            <div className="col" key={index}>
              <div className="counter-single-box">
                <div className="counter-content">
                  <span>$</span>
                  <h4 className="counter">{counterValues[index]}</h4>
                  <p>Early Adopters</p>
                  <span className="mt-2 fs-3">{counter.range}</span>
                  <p>{counter.planName}</p>
                  {counter.size ? <p>Space: {counter.size}</p> :""}
                  {counter.location ? <p>Location: {counter.location}</p> :""}
                  {counter.discount ? <p>Discounted Fees: {counter.discount}</p> :""}
                 
                </div>
              </div>
            </div>
          ))}
         
          <div className="col-lg-12 col-md-12 mt-4 col-sm-12 col-xs-12">
            <div className="text-center font-weight-bold">
              <h4>{heading}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;












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