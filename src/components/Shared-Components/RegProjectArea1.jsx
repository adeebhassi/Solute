import React from 'react';
import img1 from "../../assets/images/home-two/project-icon.png"
import img2 from "../../assets/images/home-two/project-icon2.png"
import img3 from "../../assets/images/home-two/project-icon3.png"
import img4 from "../../assets/images/home-two/project-icon4.png"
import prors from "../../assets/images/home-two/project-rs.png"
import prows from "../../assets/images/home-two/project-ws.png"

const ProjectArea = () => {
  return (
    <div className="project-area style-three mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <h5 className="section-sub-title">Begin your journey with De Koshur Crafts</h5>
              <h1 className="section-main-title">Pre Screening</h1>
              <h4 className="">Choose Your Partnership Platform <br/> <span ><b style={{color:"#ff3b00;"}}>As per your Retention Period & KPI Score</b></span> </h4>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-des " style={{color:"black"}}>
             <b> Vendor Partnership Registration Process </b> 
             <h1 className="section-main-title" style={{fontSize:"40px"}}>Process 1</h1>
              </p>
            </div>
          </div>
        </div>
        
      </div>
      {/* <div className="project-bg-shape1 moveLeftBounce">
        <img src={prors} alt="shape" />
      </div>
      <div className="project-bg-shape2 bounce-animate3">
        <img src={prows} alt="shape" />
      </div> */}
      
    </div>
  );
};

export default ProjectArea;
