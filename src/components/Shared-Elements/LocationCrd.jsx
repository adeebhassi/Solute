import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ iconSrc, title, description, className, link, iconClass='' }) => {
  return (
    <div className={`col-xl-3 col-lg-4 col-md-6 `}>
      <Link to={link}>
        <div className={`project-single-box down box-4  ${className}`}>
          <div className={`project-icon ${iconClass}`}>
            <img src={iconSrc} alt="icon" />
          </div>
          <div className="projects-content">
            <h4 className="project-title"><a href="">{title}</a></h4>
            <p className="project-des">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LocationCard;
