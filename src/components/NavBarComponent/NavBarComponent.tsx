import type { LinkItem } from "../../types/Link"; 
import './navBarComponent.css'; 
import { useState, useEffect } from 'react'; 
import { NavLink } from "react-router-dom"; 

// Define the props interface for the NavBarComponent
interface NavBarComponentProps {
  data: LinkItem[]; // Array of navigation links (each link has a name and path)
}

// Functional component for rendering the navigation bar
const NavBarComponent: React.FC<NavBarComponentProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false); // State to toggle mobile menu visibility
  const [scrolling, setScrolling] = useState(false); // State to track scroll position for navbar styling

  // ===========================
  // Handle scroll event to add "scrolled" class to the navbar
  // ===========================
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Add "scrolled" class if scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener on unmount
    };
  }, []);

  return (
    /* ===========================
       Main container for the navigation bar
       =========================== */
    <nav className={`navBar px-150 ${isOpen ? 'white-bg-nav' : ''} ${scrolling ? "scrolled" : ""}`}>
      {/* 
        - Logo: Displays the logo in the navbar.
        - The `src` attribute dynamically loads the logo image.
        - The `alt` attribute provides accessible text for screen readers.
      */}
      <img className="nav-logo" src="/Task4/Images/Navbar/Logo.png" alt="logo" />

      {/* 
        - Navigation Links Container: Holds all navigation links and adjusts for responsiveness.
        - The `responsiveNav` class is added when the mobile menu is open.
      */}
      <ul className={`nav-links ${isOpen ? "responsiveNav" : ""}`}>
        {/* 
          - Map through the `data` array to render individual navigation links.
          - Each link is wrapped in an `<li>` element for semantic HTML.
        */}
        {data?.map((item: LinkItem, index) => (
          <li key={index} className={`nav-li`}>
            {/* 
              - NavLink: Renders a navigation link with active state handling.
              - The `to` prop specifies the link's destination.
              - The `className` prop dynamically applies styles based on the active state.
              - Clicking a link closes the mobile menu by setting `isOpen` to false.
            */}
            <NavLink 
              to={item.path} 
              className={({ isActive }) => (isActive ? "navLink fs-20 active" : "navLink fs-20")}
              onClick={() => {
                setIsOpen(false); // Close mobile menu when a link is clicked
              }}
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* 
          - Mobile Login Button: Visible only on smaller screens.
          - Styled as a button for better usability on mobile devices.
        */}
        <li className="mobileLoginWrapper">
          <button className="login-Btn-mobile fs-20">Login</button>
        </li>
      </ul>

      {/* 
        - Desktop Login Button: Visible on larger screens.
        - Styled as a button for better usability on desktop devices.
      */}
      <button className="login-btn fs-20">Login</button>

      {/* 
        - Toggle Button: Used to open/close the mobile menu.
        - Dynamically changes the icon based on the `isOpen` state.
        - Toggles the `isOpen` state when clicked.
      */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={
            isOpen
              ? "/Task4/Images/Navbar/close.svg" // Show close icon when the menu is open
              : "/Task4/Images/Navbar/Bars.svg" // Show hamburger icon when the menu is closed
          }
          alt="menu toggle"
        />
      </button>
    </nav>
  );
};

export default NavBarComponent;