import React from "react"; 
import "./Footer.css";
import type { FooterData } from "../../types/Footer"; 
import type { LinkItem } from "../../types/Link"; 
import SocialBtn from '../../components/SocialBtn/SocialBtn'; 

// Define the props interface for the Footer component
interface FooterProps {
  data: FooterData; // Contains all data required to render the footer (brand, sections, location, privacy, etc.)
}

// Functional component for rendering the footer
const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    /* ===========================
       Main container for the footer
       =========================== */
    <footer className="px-150 mt-160" data-aos="fade-down">
      {/* 
        - Top section of the footer: Contains brand info, navigation links, and location details.
      */}
      <div className="footer-top">
        {/* 
          - Brand Section: Displays the logo and a description of the brand.
        */}
        <div className="footer-brand">
          <img src={data.brand.logo} alt="Logo" /> {/* Display the brand logo */}
          <p className="fs-20">{data.brand.description}</p> {/* Display the brand description */}
        </div>
        {/* 
          - Map through the `sections` array to render individual columns of links.
          - Each column contains a title and a list of links.
        */}
        {data.sections.map((section, index) => (
          <div key={index} className="footer-col">
            <h3 className="fs-24">{section.title}</h3> {/* Display the section title */}
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a className="fs-20" href={link.path}>{link.name}</a> {/* Render individual links */}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* 
          - Location and Social Media Section: Displays location details and social media buttons.
        */}
        <div className="footer-col">
          <h3 className="fs-24">{data.location.title}</h3> {/* Display the location title */}
          <p className="fs-20">{data.location.description}</p> {/* Display the location description */}
          {/* 
            - SocialBtn Component: Renders social media buttons dynamically.
            - Passes the `socialLinks` data to the SocialBtn component.
          */}
          <SocialBtn item={data.socialLinks} />
        </div>
      </div>
      {/* 
        - Bottom section of the footer: Contains privacy information and additional links.
      */}
      <div className="footer-bottom">
        {/* 
          - Privacy Information: Displays a short privacy statement.
        */}
        <span className="fs-18">{data.privacy}</span>
        {/* 
          - Privacy Links: Maps through the `privacyLink` array to render additional links.
        */}
        <div className="footer-links">
          {data.privacyLink.map((item: LinkItem, index) => (
            <a className="fs-18" key={index} href={item.path}>{item.name}</a> 
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;