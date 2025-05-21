import type { Trending } from '../../types/Trending'; 
import './trendingCard.css'; // Styles specific to this component

/**
 * Interface defining the props expected by the TrendingCard component.
 */
interface TrendingCardProps {
  /**
   * `data` - A single trending item object that contains:
   * - image: URL of the property/image
   * - price: Price or cost associated with the item
   * - title: Name or title of the item
   * - location: Location information (e.g., city or address)
   */
  data: Trending;
}

/**
 * TrendingCard Component
 *
 * A reusable UI component representing a single trending item (e.g., real estate, product).
 * Displays an image, price/title, and location in a card layout.
 */
const TrendingCard: React.FC<TrendingCardProps> = ({ data }) => {
  return (
    <div className="trending-card">
      {/* Image section */}
      <img src={data.image} alt="image" />

      {/* Card header containing price and title */}
      <div className="card-header">
        {/* Price tag */}
        <span className="fs-24">{data.price}</span>

        {/* Title of the trending item */}
        <h3 className="fs-24">{data.title}</h3>
      </div>

      {/* Location info with icon */}
      <div className="card-location">
        {/* Location icon */}
        <img src="/Task4/Images/Trending/location.svg" alt="icon" />

        {/* Location text */}
        <p className="fs-20">{data.location}</p>
      </div>
    </div>
  );
};

export default TrendingCard;