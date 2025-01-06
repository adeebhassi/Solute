import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FooterUpper = ({ imageSrc, altText }) => {
  const [points, setPoints] = useState([]);
  const navigate = useNavigate();

  // Define the quadrilateral vertices
  const quadrilateral = [
    { x: 52.90, y: 50.77 },
    { x: 61.10, y: 50.77 },
    { x: 60.82, y: 57.43 },
    { x: 53.53, y: 58.34 },
  ];

  // Function to check if a point is inside the quadrilateral
  const isPointInQuadrilateral = (point, quad) => {
    const { x, y } = point;

    // Convert the percentage points into a consistent format
    const polygon = quad.map((vertex) => [vertex.x, vertex.y]);

    // Ray-casting algorithm for point-in-polygon
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0], yi = polygon[i][1];
      const xj = polygon[j][0], yj = polygon[j][1];

      const intersect =
        yi > y !== yj > y &&
        x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    // Normalize coordinates to percentages
    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

    // Check if the clicked point is inside the quadrilateral
    if (isPointInQuadrilateral({ x: xPercent, y: yPercent }, quadrilateral)) {
      navigate('/'); // Navigate to the home page
    } else {
      // Add the point to the list
      setPoints([...points, { x: xPercent, y: yPercent }]);
      console.log(xPercent,yPercent)
    }
  };

  return (
    <section className="footer-upper" style={{ position: 'relative' }}>
      <img
        src={imageSrc}
        alt={altText}
        style={{ width: '100%', display: 'block' }}
        onClick={handleClick}
      />
      {points.map((point, index) => (
        <Link
          key={index}
          to="/" // Replace with the desired route for the point
          style={{
            position: 'absolute',
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%',
            display: 'block',
          }}
        />
      ))}
    </section>
  );
};

export default FooterUpper;
