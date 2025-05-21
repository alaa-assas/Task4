import type { LinkItem } from "./Link";

export interface Section  {
    title: string; 
    links: LinkItem[]; 
  };
  
export interface Location  {
    title: string; 
    description: string; 
  };
  
export interface BrandInfo  {
    logo: string; 
    description: string; 
  };
  
export interface FooterData {
    brand: BrandInfo; 
    sections: Section[]; 
    location: Location; 
    socialLinks: LinkItem[]; 
    privacy: string;
    privacyLink: LinkItem[]
  };
  
  