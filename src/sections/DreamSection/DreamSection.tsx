// Import React and required components/types
import type { TitleData } from "../../types/Title"; // Type definition for title data
import TitleComponent from '../../components/TitleComponent/TitleComponent'; // Reusable title component
import './DreamSection.css'; // Styles specific to this section

/**
 * DreamSectionProps
 *
 * Interface defining the expected props for the DreamSection component.
 */
interface DreamSectionProps {
  /**
   * `dataTitle` - An object containing title-related data such as:
   * - heading
   * - subheading
   * - description (optional)
   */
  dataTitle: TitleData;
}

/**
 * DreamSection Component
 *
 * A simple section component that displays a title block inside a dedicated container.
 * Designed to introduce or highlight a "dream" concept or feature on the page.
 */
const DreamSection: React.FC<DreamSectionProps> = ({ dataTitle }) => {
  return (
    <section className='dream-section mt-160'>
      {/* Container for content inside the DreamSection */}
      <div className="dream-content">
        {/* Render the reusable TitleComponent with provided title data */}
        <TitleComponent data={dataTitle} />
      </div>
    </section>
  );
};

export default DreamSection;