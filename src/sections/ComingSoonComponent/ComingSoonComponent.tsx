import React from 'react';
import './ComingSoonComponent.css';

// Define props interface for the ComingSoonComponent
interface ComingSoonProps {
  img: string;   // URL of the image to display
  title: string; // Title text to show (e.g., "Coming Soon")
  desc: string;  // Description text to provide more info
}

/**
 * ComingSoonComponent
 *
 * A reusable UI component used to indicate that a feature or page is under development
 * and will be available soon. Displays an image, a title, and a description.
 */
const ComingSoonComponent: React.FC<ComingSoonProps> = ({ img, title, desc }) => {
  return (
    <section className="comming-soon px-150">
      {/* Display the illustration/image */}
      <img src={img} alt="under development" />
      {/* Text content section */}
      <div className="comming-soon-desc">
        <h3 className='fs-58'>{title}</h3>
        <p className='fs-24'>{desc}</p>
      </div>
    </section>
  );
};

export default ComingSoonComponent;