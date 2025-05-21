// Import CSS styles for this component
import './BestDealCard.css';

// Define props interface for the BestDealCard component
interface BestDealCardProps {
  // 'data' prop is a string representing the image URL
  data: string;
}

/**
 * BestDealCard Component
 *
 * A simple card component that displays an image and a group of badges.
 * It uses AOS (Animate On Scroll) library to apply animations when the card comes into view.
 */
const BestDealCard: React.FC<BestDealCardProps> = ({ data }) => {
  return (
    <div 
      className='best-card' 
      // AOS animation settings:
      data-aos="fade-up" // Fade in from bottom to top
      data-aos-anchor-placement="bottom-bottom" // Trigger animation when bottom of element hits bottom of viewport
    >
      {/* Image section */}
      <img src={data} alt="image" />

      {/* Badge group - static content for now */}
      <div className='feature'>
        <span>Featured</span> {/* Example badge */}
        <span>3D</span>       {/* Another example badge */}
      </div>
    </div>
  );
};

export default BestDealCard;