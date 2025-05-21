import { useState } from 'react';
import type { BestDealsTabItem } from '../../types/BestDealsTabItem';
import type { TitleData } from '../../types/Title';
import BestDealCard from '../../components/BestDealCard/BestDealCard';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import './BestDealSection.css';

// Define props interface for this component
interface BestDealSectionProps {
  dataTitle: TitleData;      // Data for section title
  dataCards: BestDealsTabItem[]; // Array of tab items containing name and images
}

/**
 * BestDealSection Component
 * 
 * A reusable section component that displays a title, tabs for categories,
 * and a list of best deal cards based on the selected tab.
 */
const BestDealSection: React.FC<BestDealSectionProps> = ({ dataTitle, dataCards }) => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState(dataCards[0].name); 

  // Find the tab object that matches the current activeTab
  const selectedTab = dataCards.find(item => item.name === activeTab);

  return (
    <section className='best-section px-150 mt-160'>
      {/* Render the section title */}
      <TitleComponent data={dataTitle} />

      <div>
        {/* Tabs navigation */}
        <div className="tabs">
          {dataCards.map((item, index) => (
            <button
              key={index}
              className={`tab-btn fs-24 ${item.name === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(item.name)} // Update active tab on click
            >
              {item.name} {/* Tab label */}
            </button>
          ))}
        </div>

        {/* Content area for the selected tab */}
        <div className="tab-content-best">
          {/* Map through images of the selected tab and render BestDealCard */}
          {selectedTab?.images.map((img, idx) => (
            <BestDealCard key={idx} data={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDealSection;