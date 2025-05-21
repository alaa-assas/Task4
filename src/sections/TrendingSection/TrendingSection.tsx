import TitleComponent from '../../components/TitleComponent/TitleComponent';
import TrendingCard from '../../components/TrendingCard/TrendingCard';
import type { TitleData } from '../../types/Title';   
import type { Trending } from '../../types/Trending'; 
import './trendingSection.css'; // Styles for this section

/**
 * Interface defining the props expected by the TrendingSection component.
 */
interface TrendingSectionProps {
  /**
   * `dataTitle` - Object containing title and description for the section header.
   * Expected structure:
   * {
   *   title: string;
   *   desc?: string;
   * }
   */
  dataTitle: TitleData;

  /**
   * `dataCards` - Array of trending items to display.
   * Each item should conform to the `Trending` interface.
   */
  dataCards: Trending[];
}

/**
 * TrendingSection Component
 *
 * Displays a section with a heading and a list of "trending" cards.
 * Cards are grouped into rows using a helper function (`groupData`) that organizes them into chunks.
 * Uses AOS (Animate On Scroll) for fade-in animation on card groups.
 */
const TrendingSection: React.FC<TrendingSectionProps> = ({ dataTitle, dataCards }) => {

  /**
   * Helper function to group an array of trending items into sub-arrays.
   * Used to render multiple cards per row.
   *
   * @param data - An array of `Trending` objects.
   * @returns A 2D array where each inner array contains up to 3 items.
   */
  const groupData = (data: Trending[]) => {
    return data.reduce<Trending[][]>((acc, curr, index) => {
      // Start a new group every 3 items
      if (index % 3 === 0) {
        acc.push([curr]);
      } else {
        // Add current item to the last group
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);
  };

  return (
    <section className="trending-section px-150 mt-160">
      {/* Section title */}
      <TitleComponent data={dataTitle} />

      {/* Container for trending cards */}
      <div className="trending-cards">
        {/* Map over grouped cards */}
        {groupData(dataCards).map((group, groupKey) => (
          <div
            key={groupKey}
            className="trending-cards-group"
            data-aos="fade-down"           // Animation effect
            data-aos-duration="1500"       // Duration of animation
            data-aos-delay={groupKey * 400} // Staggered animation delay per group
          >
            {/* Render individual cards inside the current group */}
            {group.map((item, itemKey) => (
              <TrendingCard key={itemKey} data={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;