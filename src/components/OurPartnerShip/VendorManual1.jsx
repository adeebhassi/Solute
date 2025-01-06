// import React from 'react';
// import image from '../../assets/images/your3.png';
// import image1 from '../../assets/images/1.png';
// import image2 from '../../assets/images/2.png';
// import image3 from '../../assets/images/3.png';
// import image4 from '../../assets/images/4.png';
// import image5 from '../../assets/images/5.png';
// import image6 from '../../assets/images/6.png';
// import image7 from '../../assets/images/6.png';
// import image8 from '../../assets/images/process icon/1.png';
// import image9 from '../../assets/images/process icon/2.png';
// import image10 from '../../assets/images/process icon/3.png';
import image11 from '../../assets/images/process icon/4.png';
// import image12 from '../../assets/images/process icon/5.png';
// import { useLocation } from 'react-router-dom';
// const VendorPartnership = () => {
//   const location = useLocation();
//   const { retentionPeriod, kpiScore } = location.state || {};
//   return (
//     <section
//       className="cs_bg_filed"
//       data-background="assets/how_to_work_bg.svg"
//       style={{ backgroundImage: "url('assets/how_to_work_bg.svg')",width:"100%" }}
//     >
      
//       <div className="container">
//         <div className="cs_section_heading_1_with_sub">
//           <div className="cs_section_heading cs_style_1">
//             <div className="row">
//               <div className="col-lg-4 col-md-12 col-sm-12">
                
//               </div>
//               <div className="col-lg-8 col-md-12 col-sm-12">
//                 {/* <h3 className="cs_section_subtitle font-1-1-44 mt-1-1 cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10 wow fadeInUp"
//                   data-wow-duration="0.9s" data-wow-delay="0.25s">
//                   Vendor Partnership Framework and Pathway
//                 </h3>
                
//                 */}
                
//               </div>
//             </div>
//           </div>
//         </div>
       
//         <div className="mt-5 animted-xet">
//           <div className="row " >
//             {[
//               {
//                 image: image1,
//                 title: "E-Commerce",
//                 subtitle: "Vendor Partnership",
//                 description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 18 Months at Ecommerce Platform<br> <b class="red-color"> `,
//                 desc2:`Maintain KPI Score  <b class="red-color">  ≥ 7+ Aggregate Platform Performance Score </b> <br> `,
//                 desc3:`Next Partnership Level  <b class="red-color"> Consignment </b>`,
//                 icon1:image8,
//                 icon2:image9,
//                 icon3:image10,
//                 link: "/about",
//                 requiredRetention: 18,
//       requiredKpi: 7,
//               },
//               {
//                 image: image4,
//                 title: "Consignment",
//                 subtitle: "Vendor Partnership",
//                 description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 6 Months at Consignment Platform<br> <b class="red-color"> `,
//                 desc2:`Maintain KPI Score  <b class="red-color"> ≥ 7+ Aggregate Platform Performance Score </b> <br> `,
//                 desc3:`Next Partnership Level  <b class="red-color"> Exhibition </b>`,
//                 icon1:image8,
//                 icon2:image9,
//                 icon3:image10,
//                 link: "/about",
//                 requiredRetention: 24,
//       requiredKpi: 7,
//               },
//               {
//                 image: image5,
//                 title: "Exhibition",
//                 subtitle: "Vendor Partnership",
//                 description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 6 Months at Exhibition Platform<br> <b class="red-color"> `,
//                 desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
//                 desc3:`Next Partnership Level  <b class="red-color"> Import Export</b>`,
//                 icon1:image8,
//                 icon2:image9,
//                 icon3:image10,
//                 link: "/about",
//                 requiredRetention: 30,
//       requiredKpi: 8,
//               },
//               {
//                 image: image3,
//                 title: "Import Export",
//                 subtitle: "Vendor Partnership",
//                 description: ` </b>Maintain Retention Period <b class="red-color"> ≥ 6 Months at Import Export Platform<br> <b class="red-color"> `,
//                 desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
//                 desc3:`Next Partnership Level  <b class="red-color"> Brick & Mortar</b>`,
//                 icon1:image8,
//                 icon2:image9,
//                 icon3:image10,
//                 link: "/about",
//                 requiredRetention: 36,
//       requiredKpi: 8,
//               },
//               {
//                 image: image2,
//                 title: "Brick & Mortar",
//                 subtitle: "Vendor Partnership",
//                 description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 24 Months at Brick & Mortar Platform<br> <b class="red-color"> `,
//                 desc2:`Maintain KPI Score  <b class="red-color">  ≥  8+ Aggregate Platform Performance Score </b> <br> `,
//                 desc3:`Next Partnership Level  <b class="red-color">Subsidiary</b>`,
//                 icon1:image8,
//                 icon2:image9,
//                 icon3:image10,
//                 link: "/about",
//                 requiredRetention: 42,
//       requiredKpi: 8,
//               },
//               {
//                 image: image6,
//                 title: "Subsidiary",

//                 subtitle: "Vendor Partnership",
//                 description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 24 Months at Subsidiary Platform<br> <b class="red-color"> `,
//                 desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
//                 desc3:`Next Partnership Level  <b class="red-color"> Franchise</b>`,
//                 icon1:image8,
//                 icon2:image9,
//                 icon3:image10,
//                 link: "/about",
//                 requiredRetention: 50,
//       requiredKpi: 8,
//               },
//               {
//                 image: image11,
//                 title: "DKC Brand Franchise",
//                 subtitle: "Vendor Partnership",
//                 description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 6 Months at Franchise Platform<br> <b class="red-color"> `,
//                 desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
//                 desc3:`<b class="green-color"> Enjoy Independent Bussiness In USA </b>`,
//                 icon1:image8,
//                 icon2:image9,
//                 icon3:image10,
//                 link: "/about",
//                 requiredRetention: 51,
//       requiredKpi: 8,
//               }
//             ].map((item, index) => (
//               <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12" key={index}>
//                 <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200" >
//                   <div className="cs_card cs_style_1" >
//                     <div className="cs_card_in cs_white_bg" >


//                       <div className="cs_card_icon cs_center cs_mb_30 ">
//                         <img src={item.image} alt={item.title} />
//                       </div>

                      
//                   <div className=" hover-content"><p className='mt-3'><b className=''>Sorry, John, you are not eligible for this process at the moment. Unfortunately, certain criteria need to be met, which you currently do not fulfill. Please feel free to reach out if you have any questions</b></p></div>
              
//                       <div className="cs_card_title cs_mb_20 content-hide">
                      
//                       <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">{item.title}</h3>
//                       <div className='d-flex'> 
//                         <img src={item.icon1} alt="" style={{width:"40px",height:'40px'}}/>
//                         <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.description}}></p>
//                       </div>
//                       <div className='d-flex'> 
//                         <img src={item.icon2} alt="" style={{width:"40px",height:'40px'}}/>
//                          <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc2}}></p>
//                       </div>
//                       <div className='d-flex'> 
//                         <img src={item.icon3} alt="" style={{width:"40px",height:'40px'}}/>
//                         <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc3}}></p>
//                       </div>
//                       </div>
                      
//                       {/* <h3 className="cs_fs_24 cs_semibold cs_mb_6 mb-5">{item.subtitle}</h3> */}
                      
                     
//                     </div>
//                     <div className="cs_card_shape">
//                       <svg width="245" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12" >
//                 <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200">
//                   <div className="cs_card cs_style_1">
//                     <div className="cs_card_in cs_white_bg">
//                       <div className="cs_card_icon cs_center cs_mb_30">
//                         <img src={image12} alt="" />
//                       </div>
//                        <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">Our Five-Year Promise</h3> <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-3 " style={{color:"#ff3d00"}}>Guiding You to Risk-Free Success & Independence in the USA.</h3>
//                        <p className='mt-4 mb-0'>Let’s build your path to independence & success today. Empower yourself, inspire others, lead the way as true global entrepreneur.</p>
//                       {/* <h3 className="cs_fs_24 cs_semibold cs_mb_6 mb-5">{item.subtitle}</h3>  */}
                      
//                         {/* <img src={item.icon1} alt="" style={{width:"40px",height:'40px'}}/>
//                         <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.description}}></p>
//                         </div>
//                         <div className='d-flex'> 
//                         <img src={item.icon2} alt="" style={{width:"40px",height:'40px'}}/>
//                          <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc2}}></p></div>
//                          <div className='d-flex'> 
//                         <img src={item.icon3} alt="" style={{width:"40px",height:'40px'}}/>
//                         <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc3}}></p></div> */}
                     
//                     </div>
//                     <div className="cs_card_shape">
//                       <svg width="245" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VendorPartnership;


import React from 'react';
import { useLocation } from 'react-router-dom';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';
import image8 from '../../assets/images/process icon/1.png';
import image9 from '../../assets/images/process icon/2.png';
import image10 from '../../assets/images/process icon/3.png';

const VendorPartnership = () => {
  const location = useLocation();
  // const { retentionPeriod, kpiScore } = location.state || {};
  const retentionPeriod=0
  const kpiScore=0
  const userPackage = 'Starter'

  const cardData = [
    {
      image: image1,
      title: "E-Commerce",
      description: "Maintain Retention Period ≥ 18 Months at Ecommerce Platform",
      desc2: "Maintain KPI Score ≥ 7+ Aggregate Platform Performance Score",
      desc3: "Next Partnership Level: Consignment",
      icon1: image8,
      icon2: image9,
      icon3: image10,
      requiredRetention: 0,
      requiredKpi: 0,
      requiredPackage:null
    },
    {
      image: image4,
      title: "Consignment",
      description: "Maintain Retention Period ≥ 6 Months at Consignment Platform",
      desc2: "Maintain KPI Score ≥ 7+ Aggregate Platform Performance Score",
      desc3: "Next Partnership Level: Exhibition",
      icon1: image8,
      icon2: image9,
      icon3: image10,
      requiredRetention: 18,
      requiredKpi: 7,
      requiredPackage:'Starter'
    },
    {
      image: image5,
      title: "Exhibition",
      description: "Maintain Retention Period ≥ 6 Months at Exhibition Platform",
      desc2: "Maintain KPI Score ≥ 8+ Aggregate Platform Performance Score",
      desc3: "Next Partnership Level: Import Export",
      icon1: image8,
      icon2: image9,
      icon3: image10,
      requiredRetention: 24,
      requiredKpi: 8,
      requiredPackage:'Starter'
    },
    {
      image: image3,
      title: "Import Export",
      description: "Maintain Retention Period ≥ 6 Months at Import Export Platform",
      desc2: "Maintain KPI Score ≥ 8+ Aggregate Platform Performance Score",
      desc3: "Next Partnership Level: Brick & Mortar",
      icon1: image8,
      icon2: image9,
      icon3: image10,
      requiredRetention: 30,
      requiredKpi: 8,
      requiredPackage:'Growth'
    },
    {
      image: image2,
      title: "Brick & Mortar",
      description: "Maintain Retention Period ≥ 24 Months at Brick & Mortar Platform",
      desc2: "Maintain KPI Score ≥ 8+ Aggregate Platform Performance Score",
      desc3: "Next Partnership Level: Subsidiary",
      icon1: image8,
      icon2: image9,
      icon3: image10,
      requiredRetention: 54,
      requiredKpi: 8,
      requiredPackage:'Premium'
    },
    {
      image: image6,
      title: "Subsidiary",
      description: "Maintain Retention Period ≥ 24 Months at Subsidiary Platform",
      desc2: "Maintain KPI Score ≥ 8+ Aggregate Platform Performance Score",
      desc3: "Next Partnership Level: Franchise",
      icon1: image8,
      icon2: image9,
      icon3: image10,
      requiredRetention: 78,
      requiredKpi: 8,
      requiredPackage:null
    },
    {
      image: image11,
      title: "DKC Brand Franchise",
      subtitle: "Vendor Partnership",
      description: ` </b>Maintain Retention Period <b class="red-color">  ≥ 6 Months at Franchise Platform<br> <b class="red-color"> `,
      desc2:`Maintain KPI Score  <b class="red-color">  ≥ 8+ Aggregate Platform Performance Score </b> <br> `,
      desc3:`<b class="green-color"> Enjoy Independent Bussiness In USA </b>`,
      icon1:image8,
      icon2:image9,
      icon3:image10,
      link: "/about",
      requiredRetention: 84,
      requiredKpi: 8,
      requiredPackage:null
                    }
  ];

  return (
    <section className="cs_bg_filed"
          data-background="assets/how_to_work_bg.svg"
          style={{ backgroundImage: "url('assets/how_to_work_bg.svg')",width:"100%" }}
    >

      <div className="container">
      <div className="mt-5 animted-xet">
        <div className="row">
          {cardData.map((item, index) => {
            const isEligible =
            (userPackage === "Premium") || 
            (userPackage === "Growth" && item.requiredPackage !== "Premium") ||
            (userPackage === "Starter" && item.requiredPackage === "Starter");

          const meetsRetentionAndKpi = retentionPeriod >= item.requiredRetention && kpiScore >= item.requiredKpi;

          const isFinalEligibility = isEligible || meetsRetentionAndKpi;

            return (
              <div
              className="col-lg-3 col-md-12 col-sm-12 col-xs-12" key={index}
                onMouseEnter={(e) => {
                  if (!isFinalEligibility) {
                    e.target.classList.add('hover-error');
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isFinalEligibility) {
                    e.target.classList.remove('hover-error');
                  }
                }}
              >
                <div className="cs_card_1_col" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="200" >
                <div
                  className={`cs_card cs_style_1`}
                  style={{
                    // backgroundColor: isEligible ? '#3dff3d' : '#ffffff',
                    cursor: isFinalEligibility ? 'pointer' : 'not-allowed',
                  }}
                  title={!isFinalEligibility ? 'You are not eligible for this process' : ''}
                >
                  <div className={`cs_card_in cs_white_bg ${
                    isFinalEligibility ? 'bg-green' : 'bg-white'
                  } `}>
                    <div className="cs_card_icon cs_center cs_mb_30 ">
                      <img src={item.image} alt={item.title} />
                    </div>
                    { isFinalEligibility ? (<>
                    
                      <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">{item.title}</h3>
                      <div className="bg-green-white-icon">
                      <div className='d-flex'> 
                        <img src={item.icon1} alt="" style={{width:"40px",height:'40px'}}/>
                        <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.description}}></p>
                       </div>
                       <div className='d-flex'> 
                        <img src={item.icon2} alt="" style={{width:"40px",height:'40px'}}/>
                          <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc2}}></p>
                      </div>
                       <div className='d-flex'> 
                         <img src={item.icon3} alt="" style={{width:"40px",height:'40px'}}/>
                         <p style={{textAlign:'left'}} className="cs_fs_14 cs_mb_25" dangerouslySetInnerHTML={{__html:item.desc3}}></p>
                       </div>
                       </div>
                    
                    </>):
                     (<>
                     <h3 className="cs_fs_24 cs_semibold cs_mb_6 mt-5 ">{item.title}</h3>
                     <p style={{textAlign:'left'}} className='mt-3 cs_fs_14 cs_mb_25'>You are not eligible for <span style={{color:"#ff3d00"}}>{item.title}</span> because It requires minimum <span style={{color:"#ff3d00"}}>retention period of  {item.requiredRetention} </span> months and a <span style={{color:"#ff3d00"}}> KPI score of  {item.requiredKpi}</span> or higher.</p>
                    </>)}
                    
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default VendorPartnership;
