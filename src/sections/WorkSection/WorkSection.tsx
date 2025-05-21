import type { TitleData } from '../../types/Title'; 
import type { WorkItem } from '../../types/Work';  
import TitleComponent from '../../components/TitleComponent/TitleComponent'; 
import WorkCard from '../../components/WorkCard/WorkCard'; 
import './workSection.css'; 

// Define the props interface for the WorkSection component
interface WorkSectionProps {
  dataTitle: TitleData;    // Title and description for the section header
  dataCards: WorkItem[];   // List of work cards to render
}

// Functional component for the Work Section
const WorkSection: React.FC<WorkSectionProps> = ({ dataTitle, dataCards }) => {
  return (
    /* ===========================
       Section: Work Section Wrapper
       =========================== */
    <section className="work-section px-150 mt-160">
      {/* 
        - TitleComponent: Displays the section's title and description.
        - The `data` prop is passed to dynamically set the title and description.
      */}
      <TitleComponent data={dataTitle} />

      {/* 
        - Container for Work Cards
        - Maps through the `dataCards` array to render individual WorkCard components.
      */}
      <div className="work-cards">
        {dataCards.map((item: WorkItem, index) => (
          /*
            - WorkCard: Renders a single work card.
            - The `key` prop ensures each card has a unique identifier (using the index).
            - The `data` prop passes the work item data to the WorkCard component.
          */
          <WorkCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;