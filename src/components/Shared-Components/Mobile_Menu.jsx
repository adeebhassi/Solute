import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to track route changes

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false); // Automatically close the menu
  }, [location.pathname]); // Trigger on route change

  return (
    <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none w-100">
      <div
        className="menu-header"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}
      >
        <h4 className="menu-name text-white">SoluteK</h4>
        <button
          className="menu-toggle-button"
          onClick={toggleMenu}
          style={{ border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer', maxWidth: '30px' }}
        >
          {isOpen ? 'X' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu open">
          <nav className="solutek_menu">
            <ul className="nav_scroll">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">
                  About Us<i className="bi bi-chevron-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li><Link to="/mission-vision">Mission Vision & Value</Link></li>
                  <li><Link to="/brand-story">Brand Story</Link></li>
                  <li><Link to="/brand-credential">Brand Credentials</Link></li>
                  <li><Link to="/bussiness-location">Business Location</Link></li>
                  <li><Link to="/bussiness-niche">Business Niche</Link></li>
                  <li><Link to="/team">Team</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#">
                  Our Partnership<i className="bi bi-chevron-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li><Link to="/ecommerce">E Commerce</Link></li>
                  <li><Link to="/brick-mortar">Brick & Mortar</Link></li>
                  <li><Link to="/importexport">Import Export</Link></li>
                  <li><Link to="/consignment">Consignment</Link></li>
                  <li><Link to="/exhibition">Exhibition</Link></li>
                  <li><Link to="/subsidary">Subsidary</Link></li>
                  <li><Link to="/franchise">Franchise</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/partnership-process">Partnership Process</Link>
              </li>
              <li>
                <Link to="/contact">Partnership Registration</Link>
              </li>
              <li>
                <Link to="/book-appointment">Book Appointment</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
