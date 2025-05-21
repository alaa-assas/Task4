// Import required dependencies and types
import type { TitleData } from "../../types/Title";   // Type definition for title data (title, description)
import type { WorkItem } from "../../types/Work";     // Type definition for work items used in info cards
import InfoCard from '../../components/InfoCard/InfoCard'; // Reusable card component for displaying work items
import './Hero.css'; // Styles specific to this Hero section

/**
 * Interface defining the props expected by the Hero component.
 */
interface HeroProps {
  /**
   * `data` - Section title and description data.
   * Expected structure:
   * {
   *   title: string;
   *   desc?: string;
   * }
   */
  data: TitleData;

  /**
   * `herodata` - Array of `WorkItem` objects used to render info cards.
   * Each item typically includes:
   * - icon: Path to an image/icon
   * - title: Card title
   * - desc: Short description or detail
   */
  herodata: WorkItem[];
}

/**
 * Hero Component
 *
 * A full-width hero section that displays:
 * - A background image
 * - A title and description at the top
 * - A set of reusable info cards below
 *
 * Designed to be the introductory section of a landing page.
 */
const Hero: React.FC<HeroProps> = ({ data, herodata }) => {
  return (
    <section className="hero">
      {/* Background Image */}
      <img className="hero-image" src="/Task4/Images/Hero/hero.png" alt="hero image" />
      {/* Main content container */}
      <div className="hero-container">
        {/* Title and description section */}
        <div className="hero-title px-150">
          <h1>{data.title}</h1> {/* Main heading */}
          <p>{data.desc}</p> {/* Description or subheading */}
        </div>

        {/* Info Cards Section */}
        <div className="Info-cards">
          {/* Map over herodata array and render an InfoCard for each item */}
          {herodata.map((itemData, index) => (
            <InfoCard key={index} item={itemData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;