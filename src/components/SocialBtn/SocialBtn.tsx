import type { LinkItem } from '../../types/Link'; 
import './SocialBtn.css';

// Define the props interface for the SocialBtn component
interface SocialBtnProps {
  item: LinkItem[]; // Array of social media links, each containing a name (icon URL) and path (link URL)
}

// Functional component for rendering social media buttons
const SocialBtn: React.FC<SocialBtnProps> = ({ item }) => {
  return (
    /* ===========================
       Main container for social media icons
       =========================== */
    <div className="social-icons">
      {/* 
        - Map through the `item` array to render individual social media icons.
        - Each icon is wrapped in an `<a>` element for navigation.
      */}
      {item.map((link, index) => (
        <a key={index} href={link.path}>
          {/* 
            - Render the social media icon as an image.
            - The `src` attribute dynamically loads the icon URL from the `name` property.
            - The `alt` attribute provides accessible text for screen readers.
          */}
          <img src={link.name} alt="social icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialBtn;