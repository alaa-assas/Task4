import type { TitleData } from "../../types/Title"; 
import './TitleComponent.css'; 

/**
 * TitleProps
 *
 * Interface defining the expected props for the TitleComponent.
 */
interface TitleProps {
  /**
   * `data` - An object containing title-related information such as:
   * - title: Main heading text (string)
   * - desc: Optional description or subtitle (string)
   */
  data: TitleData;
}

/**
 * TitleComponent
 *
 * A reusable UI component that displays a consistent heading and description block.
 * Designed to be used across various sections of the application.
 */
const TitleComponent: React.FC<TitleProps> = ({ data }) => {
  return (
    <div className="title-comp">
      {/* Section heading */}
      <h2 className="fs-58">{data.title}</h2>

      {/* Section description (optional) */}
      <p className="fs-18">{data.desc}</p>
    </div>
  );
};

export default TitleComponent;