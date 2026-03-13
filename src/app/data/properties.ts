export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceNumeric: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  status: "For Sale" | "For Rent";
  image: string;
  description: string;
  features: string[];
}

import property1 from "@/assets/property1.jpeg";
import property2 from "@/assets/property2.jpeg";
import property3 from "@/assets/property3.jpeg";
import property4 from "@/assets/property4.jpeg";
import property5 from "@/assets/property5.jpeg";
import property6 from "@/assets/property6.jpeg";
import property7 from "@/assets/property7.jpeg";
import property8 from "@/assets/property8.jpeg";
import property9 from "@/assets/property9.jpeg";
import property10 from "@/assets/property10.jpeg";
import property11 from "@/assets/property11.jpeg";
import property12 from "@/assets/property12.jpeg";

export const properties: Property[] = [
  {
    id: "1",
    title: "6 Bedroom Fully Detached Duplex with BQ - Turnkey Finished",
    location: "Dove Garden Estate, Life Camp, Abuja",
    price: "₦380,000,000",
    priceNumeric: 380000000,
    bedrooms: 6,
    bathrooms: 4,
    area: "600 sqm",
    type: "Detached Duplex",
    status: "For Sale",
    image: property1,
    description: "Exquisite 6-bedroom fully detached duplex with BQ in the prestigious Dove Garden Estate at Life Camp. Turnkey finished with modern design, premium finishes, and all smart home features ready for immediate occupancy.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "BQ", "Premium Finishes"]
  },
  {
    id: "2",
    title: "6 Bedroom Fully Detached Duplex with BQ - DPC Level",
    location: "Dove Garden Estate, Life Camp, Abuja",
    price: "₦160,000,000",
    priceNumeric: 160000000,
    bedrooms: 6,
    bathrooms: 4,
    area: "600 sqm",
    type: "Detached Duplex",
    status: "For Sale",
    image: property2,
    description: "6-bedroom fully detached duplex with BQ at the DPC level finish. Located in the prestigious Dove Garden Estate at Life Camp. Ready for your personal touches and design preferences.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "BQ", "DPC Level Finish"]
  },
  {
    id: "3",
    title: "6 Bedroom Fully Detached Duplex with BQ - Semi Finished",
    location: "Dove Villa Estate, Life Camp, Abuja",
    price: "₦300,000,000",
    priceNumeric: 300000000,
    bedrooms: 6,
    bathrooms: 4,
    area: "600 sqm",
    type: "Detached Duplex",
    status: "For Sale",
    image: property3,
    description: "Stunning 6-bedroom fully detached duplex with BQ in the exclusive Dove Villa Estate at Life Camp. Semi-finished with superior craftsmanship and ready for final touches.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "BQ", "Semi Finished"]
  },
  {
    id: "4",
    title: "4 Bedroom Terrace Duplex - Finished Level",
    location: "Dove Court Villa, Life Camp, Abuja",
    price: "₦300,000,000",
    priceNumeric: 300000000,
    bedrooms: 4,
    bathrooms: 3,
    area: "450 sqm",
    type: "Terrace Duplex",
    status: "For Sale",
    image: property4,
    description: "Elegant 4-bedroom terrace duplex at premium finished level in Dove Court Villa, Life Camp. Ready for immediate occupancy with all premium amenities and finishes.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "Premium Finishes", "Finished Level"]
  },
  {
    id: "5",
    title: "4 Bedroom Terrace Duplex - Semi Finished",
    location: "Dove Court Villa, Life Camp, Abuja",
    price: "₦200,000,000",
    priceNumeric: 200000000,
    bedrooms: 4,
    bathrooms: 3,
    area: "450 sqm",
    type: "Terrace Duplex",
    status: "For Sale",
    image: property5,
    description: "Beautiful 4-bedroom terrace duplex at semi-finished level in Dove Court Villa, Life Camp. Offers flexibility for final personalization with excellent structural integrity.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "Semi Finished", "Quality Construction"]
  },
  {
    id: "6",
    title: "4 Bedroom Terrace Duplex with BQ - 450 sqm",
    location: "Ella and David Estate, Kubwa, Abuja",
    price: "₦65,000,000",
    priceNumeric: 65000000,
    bedrooms: 4,
    bathrooms: 3,
    area: "450 sqm",
    type: "Terrace Duplex",
    status: "For Sale",
    image: property6,
    description: "Spacious 450 sqm, 4-bedroom terrace duplex with BQ in the thriving Ella and David Estate, Kubwa. Affordable luxury with modern amenities and excellent community features.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "BQ", "Affordable Luxury"]
  },
  {
    id: "7",
    title: "4 Bedroom Terrace Duplex with BQ - 300 sqm (Kubwa)",
    location: "Ella and David Estate, Kubwa, Abuja",
    price: "₦45,000,000",
    priceNumeric: 45000000,
    bedrooms: 4,
    bathrooms: 3,
    area: "300 sqm",
    type: "Terrace Duplex",
    status: "For Sale",
    image: property7,
    description: "Compact and efficient 300 sqm, 4-bedroom terrace duplex with BQ in Ella and David Estate, Kubwa. Perfect for buyers seeking value without compromising on quality and features.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "BQ", "Value Property"]
  },
  {
    id: "8",
    title: "4 Bedroom Terrace Duplex with BQ - 300 sqm (Ushafa Phase 1)",
    location: "Ella and David Estate, Ushafa Phase 1, Abuja",
    price: "₦45,000,000",
    priceNumeric: 45000000,
    bedrooms: 4,
    bathrooms: 3,
    area: "300 sqm",
    type: "Terrace Duplex",
    status: "For Sale",
    image: property8,
    description: "Excellent 300 sqm, 4-bedroom terrace duplex with BQ in Ella and David Estate, Ushafa Phase 1. Modern living at an affordable price in a rapidly developing community.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "BQ", "Strategic Location"]
  },
  {
    id: "9",
    title: "4 Bedroom Terrace Duplex with BQ - 300 sqm (Ushafa Phase 2)",
    location: "Ella and David Estate, Ushafa Phase 2, Abuja",
    price: "₦45,000,000",
    priceNumeric: 45000000,
    bedrooms: 4,
    bathrooms: 3,
    area: "300 sqm",
    type: "Terrace Duplex",
    status: "For Sale",
    image: property9,
    description: "Spacious 300 sqm, 4-bedroom terrace duplex with BQ in the newest phase of Ella and David Estate, Ushafa Phase 2. Built with contemporary standards and premium quality.",
    features: ["Modern Design", "Smart Home Features", "Central Water Supply", "24/7 Power Supply", "CCTV Camera", "Ample Parking", "BQ", "New Development"]
  },
  {
    id: "10",
    title: "Life Camp - Premium Residential Location",
    location: "Life Camp, Abuja",
    price: "Contact for Details",
    priceNumeric: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: "Various",
    type: "Residential Estate",
    status: "For Sale",
    image: property10,
    description: "Life Camp is located in the Maitama Area Council of Abuja, a premium residential district known for luxury homes, excellent infrastructure, and close proximity to the Central Business District.",
    features: ["Prime Location", "Excellent Infrastructure", "Security", "Modern Amenities", "Close to CBD", "Growing Community"]
  },
  {
    id: "11",
    title: "Kubwa - Thriving Community Development",
    location: "Kubwa, Abuja",
    price: "Contact for Details",
    priceNumeric: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: "Various",
    type: "Residential Estate",
    status: "For Sale",
    image: property11,
    description: "Kubwa is a rapidly developing residential area in Abuja with excellent value for money. Home to the Ella and David Estate, offering affordable luxury housing options.",
    features: ["Affordable Luxury", "Growing Infrastructure", "Community Facilities", "Smart Planning", "Value Properties", "Accessible Location"]
  },
  {
    id: "12",
    title: "Ushafa - Emerging Residential Hub",
    location: "Ushafa, Abuja",
    price: "Contact for Details",
    priceNumeric: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: "Various",
    type: "Residential Estate",
    status: "For Sale",
    image: property12,
    description: "Ushafa Phase 1 and 2 represent the future of residential development in Abuja. Modern planning, excellent community infrastructure, and strategic location make it an ideal investment.",
    features: ["Future Growth Area", "Modern Planning", "Community Amenities", "Phase 1 & 2 Available", "Investment Potential", "New Development"]
  }
];

