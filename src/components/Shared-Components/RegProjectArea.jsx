import React from "react";
import img1 from "../../assets/images/home-two/project-icon.png";
import img2 from "../../assets/images/home-two/project-icon2.png";
import img3 from "../../assets/images/home-two/project-icon3.png";
import img4 from "../../assets/images/home-two/project-icon4.png";
import prors from "../../assets/images/home-two/project-rs.png";
import prows from "../../assets/images/home-two/project-ws.png";
import { Link } from "react-router-dom";

import BusinessLocationHeader from "../Shared-Elements/LocationHeader";
import LocationCard from "../Shared-Elements/LocationCrd";
const ProjectArea = () => {
  const cardData = [
    {
      id: 1,
      link: "/login",
      imgSrc: img1,
      title: "Portal Login",
      description: "Vendors express interest and undergo pre-screening.",
      boxClass: "box-1",
      iconClass: "white-icon",
    },
    {
      id: 2,
      link: "/partnership-registration1",
      imgSrc: img2,
      title: "Select Partnership",
      description: "Evaluate performance, continuous feedback.",
      boxClass: "box-4 reg-project-box",
      iconClass: "white-icon",
    },
    {
      id: 3,
      link: "/project-details.html",
      imgSrc: img3,
      title: "Application Submission",
      description: "Submit application necessary documentation.",
      boxClass: "box-2",
      iconClass: "white-icon",
    },
    {
      id: 4,
      link: "/project-details.html",
      imgSrc: img4,
      title: "Product Portfolio",
      description: "Assess product quality, uniqueness, compatibility.",
      boxClass: "box-4",
      iconClass: "white-icon",
    },
    {
      id: 5,
      link: "/project-details.html",
      imgSrc: img2,
      title: "Document Review",
      description: "Verify compliance with legal operational requirements.",
      boxClass: "box-3",
      iconClass: "white-icon",
    },
    {
      id: 6,
      link: "/project-details.html",
      imgSrc: img3,
      title: "Vendor Agreement",
      description: "Sign agreement outlining terms and expectations.",
      boxClass: "box-4",
      iconClass: "white-icon",
    },
    {
      id: 7,
      link: "/project-details.html",
      imgSrc: img4,
      title: "Training Program",
      description: "Participate in platform and policy training.",
      boxClass: "box-4",
      iconClass: "white-icon",
    },
    {
      id: 8,
      link: "/project-details.html",
      imgSrc: img4,
      title: "Partnership Activation",
      description: "Gain access and upload product listings.",
      boxClass: "box-4",
      iconClass: "white-icon",
    },
  ];
  return (
    <div className="project-area style-three mt-5">
      <div className="container">
        <BusinessLocationHeader
          subTitle="Begin your journey with De Koshur Crafts"
          mainTitle="Welcome Onboarding"
          secondaryTitle=""
          description=" We are delighted to see your interest in partnering with us. Please complete the online form to kickstart your journey. We're excited to work together and <b>achieve great success!</b> "
        />
        <div className="row project-bs">
          {cardData.map(
            ({ id, link, imgSrc, title, description, boxClass, iconClass }) => (
              <LocationCard
                key={id}
                iconSrc={imgSrc}
                title={title}
                description={description}
                className={boxClass}
                link={link}
                iconClass={iconClass}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;
