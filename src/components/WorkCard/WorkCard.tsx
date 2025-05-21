import type { WorkItem } from '../../types/Work'; 
import './workCard.css'; 

// Define the props interface for the WorkCard component
interface WorkCardProps {
  data: WorkItem; // Contains icon, title, and description for the work card
}

// Functional component for rendering an individual work card
const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
  return (
    /* ===========================
       Container for individual work card
       =========================== */
    <div className="work-card" data-aos="flip-right">
      {/* 
        - Icon: Displays the icon associated with the work card.
        - The `src` attribute dynamically loads the icon image from the `data` prop.
        - The `alt` attribute provides accessible text for screen readers.
      */}
      <img src={data.icon} alt="icon" />

      {/* 
        - Title and Description: Displays the title and description of the work card.
        - Uses a nested container for better organization.
      */}
      <div className="work-card-desc">
        {/* 
          - Title: Displays the title of the work card.
          - The `fs-24` class applies a font size of 24px (or equivalent).
        */}
        <h3 className="fs-24">{data.title}</h3>

        {/* 
          - Description: Displays the description of the work card.
          - The `fs-20-6` class applies a font size of 20px and line height of 1.6 (or equivalent).
        */}
        <p className="fs-20-6">{data.description}</p>
      </div>
    </div>
  );
};

export default WorkCard;