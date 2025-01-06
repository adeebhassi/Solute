const ServiceArea = ({ services, subtitle, mainTitle, highlight,DesignFor,access,compulsory,KPIscore,fee }) => {
        return (
          <div className="service-area style-two">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h5 className="section-sub-title">
                      {subtitle}
                    </h5>
                    <h1 className="section-main-title">
                      {mainTitle}
                      <span style={{ color: "#ff3d00" }}>{highlight}</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                {services.map((service, index) => (
                  <div key={index} className="col-lg-4 col-md-6 my-4">
                    <div className="single-service-box">
                      <div className="service-box-inner">
                        <div className="service-content">
                          <h4 className="service-title ">{service.title}</h4>
                          {service.fee ? <h6 className=""><span >
                              <b>Fee </b>
                            </span>
                            : {service.fee}
                          </h6> : ""}
                          
                          
                            {service.challenge  ? ( <>
                              <p className="service-des mt-5">
                              <span className="" style={{ color: "#ff7102" }}>
                              <b>Challenge</b>
                            </span>
                            : {service.challenge}
                           
                            <br /> </p></>) : ''}

                            {service.benefit ? ( <>
                              <p className="service-des">
                              <span style={{ color: "#ff7102" }}>
                              <b>Benefit</b>
                            </span>
                            : {service.benefit}
                             </p></>) : ''}
                           
                            
                          
                          <p className="service-des mt-5">
                            {service.DesignFor ? ( <> 

                            <span style={{ color: "#ff3d00" }}>
                              <b>Designed For</b>
                            </span>
                            : {service.DesignFor}
                            <br /></>) :''}
                           
                            { service.access ? (<><span style={{ color: "#ff3d00" }}>
                              <b>Access</b>
                            </span>
                            : {service.access}
                            <br /></> ) : ""}
                            
                            { service.compulsory ? (<> <span style={{ color: "#ff3d00" }}>
                              <b>Compulsory</b>
                            </span>
                            : {service.compulsory}
                            <br /></> ) : ""}
                           
                            { service.KPIscore ? (<><span style={{ color: "#ff3d00" }}>
                              <b>KPI Score</b>
                            </span>
                            : {service.KPIscore}
                            <br /></>) : ""}
                            
                            
                          </p>
                        </div>
                        <div className="service-icon">
                          <img src={service.icon} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      };
      
      export default ServiceArea;
      