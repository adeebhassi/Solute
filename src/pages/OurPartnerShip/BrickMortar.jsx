import React from "react";
import HeroSection from "../../components/OurPartnerShip/HeroSection";
import heroImage from "../../assets/images/PARTNERSHIP/2.png";
import heroShape from "../../assets/images/home-two/hero-btn-shape.png";
import AboutArea from "../../components/OurPartnerShip/AboutArea";
import aboutThumb from "../../assets/images/about-thumb.png";
import aboutShape from "../../assets/images/about1.png";
import aboutIcon from "../../assets/images/about4.png";
import CaseStudyArea from "../../components/OurPartnerShip/CaseStudy";
import AboutSection from "../../components/Shared-Components/AboutSection";
import aboutImage from "../../assets/images/about-thu3.png";
import CompareToOther from "../../components/OurPartnerShip/CompareToOther";
import ServiceArea from "../../components/OurPartnerShip/ServiceArea";
import AfterFAQ from "../../components/Shared-Components/AfterFAQ";

import faqImage from "../../assets/images/faq-big.png";
import faqShape1 from "../../assets/images/faq2.png";
import faqShape2 from "../../assets/images/faq3.png";
import elib from "../../assets/images/elib.png";
import CounterArea from "../../components/OurPartnerShip/CounterArea";
import HowItWorks from "../../components/OurPartnerShip/HowItWorks";

import aboutImg from "../../assets/images/about_img_1.png";
import rightArrow from "../../assets/images/right-arrow.png";
import icon22 from "../../assets/icon/22.png";
import booking from "../../assets/icon/booking.png";

import FooterUpper from "../../components/OurPartnerShip/FooterUpper";
import ecommerceImage from "../../assets/images/ecommercepage.png";
import parpro from "../../assets/images/parpro.png";

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import logo from "../../assets/images/your3.png";

import VendorPartnership from "../../components/OurPartnerShip/CardSection";

import ContactUs from "../../components/OurPartnerShip/ContactUs";
import FooterArea from "../../components/Shared-Components/FooterArea";

import PricingService from "../../components/OurPartnerShip/PricingService";

import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import service5 from "../../assets/images/service5.png";
import service6 from "../../assets/images/service6.png";
import FaqArea from "../../components/OurPartnerShip/FAQArea";
import FAQSectionDynamic from "../../components/OurPartnerShip/FaqSection";
import FooterUpperwithoutLink from "../../components/Shared-Components/FooterUpperWithoutLink";

const BrickPage = () => {
  const heroSectionData = {
    heading1: "DKC BRICK & MORTAR VENDOR PARTNERSHIP",
    heading2:
      "Connecting Kashmiri Artisans to US Global Markets through Shared Spaces and Strategic Support",
    heading3: "",
    description:
      "Empowering the Soul of Kashmir: Preserving Heritage, Driving Growth, and Building Opportunity",
    buttonText: "KASHMIR HANDICRAFT SECTOR EXCLUSIVELY",
    buttonLink: "#",
    heroImage: heroImage,
    heroShapeImage: heroShape,
  };

  const caseStudyContent = {
    title: "Key Features of Our Brick and Mortar Vendor Partnership",
    subtitle:
      "Platform Engineered in US – Designed to Empower Kashmiri Artisans and Vendors for Success in ",
    colortitle: "US Physical Markets",
    categories: [
      { key: "all", label: "All" },
      { key: "Infrastructure", label: "Infrastructure" },
      { key: "Logistics & Support", label: "Logistics" },
      {
        key: "Marketing & Retail",
        label: "Marketing & Retail",
      },
      { key: "Engagement & Customer Experience", label: "Customer Engagement" },
      {
        key: "Loyalty & Retention Programs",
        label: "Loyalty & Retention",
      },
      { key: "Financing & Assistance", label: "Financing & Assistance" },
    ],
    caseStudyData: [
      {
        category: "Infrastructure",
        title: "Phygital Spaces Empowering Kashmiri Craftsmanship",
        features: [
          "Shared retail spaces integration",
          "Customizable omni-channel vendor displays",
          "Centralized inventory management facilities",
          "Real-time inventory tracking systems",
          "Sustainable, eco-friendly workspaces available",
          "Flexible short-term leasing options",
          "Premium product omni-channel showcases",
          "Shared operational resource zones",
          "Climate-controlled storage for crafts",
          "Networking lounges for artisan collaborations",
          "Enhanced product omni-channel visibility",
          "Staffed locations for seamless operations",
        ],
      },
      {
        category: "Logistics & Support",
        title: "Streamlining Supply Chains for Seamless Global Reach",
        features: [
          "Visa assistance services",
          "Customs clearance facilitation",
          "International trade guidance",
          "Packaging compliance support",
          "Multi-location distribution solutions",
          "Trained in-store staff",
          "Inventory shipment tracking",
          "Vendor consignment logistics",
          "Affordable freight services",
          "Courier integration systems",
          "Seamless returns management",
          "Insurance for inventory",
        ],
      },
      {
        category: "Marketing & Retail",
        title: "Amplifying Kashmiri Brands Through Strategic Visibility",
        features: [
          "Social media campaigns",
          "Tailored promotional material",
          "Celebrity endorsements partnerships",
          "Visual merchandising strategies",
          "Retail analytics insights",
          "Event planning services",
          "Craft expos participation",
          "Customer engagement programs",
          "Omni-channel marketing integration",
          "Luxury gift catalogs",
          "Discounted campaign fees",
          "Marketing ROI reports",
        ],
      },
      {
        category: "Engagement & Customer Experience",
        title: "Creating Experiences Around Kashmiri Heritage",
        features: [
          "Live craft demonstrations",
          "Cultural experience programs",
          "AR technology showcases",
          "Artisan-trained staff",
          "Artisan profile installations",
          "Personalized product suggestions",
          "Wearable crafts trials",
          "Feedback collection kiosks",
          "Production process videos",
          "Repeat buyer loyalty",
          "Artisan meet-and-greets",
          "Seasonal vendor showcases",
        ],
      },
      {
        category: "Loyalty & Retention Programs",
        title: "Fostering Lasting Connections With Artisans & Buyers",
        features: [
          "Points-based loyalty system",
          "Tiered membership benefits",
          "Early collection access",
          "Milestone reward programs",
          "Charity-driven purchase programs",
          "VIP buyer tiers",
          "Customer referral rewards",
          "Feedback exchange credits",
          "Personalized holiday gifting",
          "Bulk buyer discounts",
          "Artisan-backed gift vouchers",
          "Festival-based campaigns",
        ],
      },
      {
        category: "Financing & Assistance",
        title: "Empowering Growth With Financial Freedom & Support",
        features: [
          "Vendor financing options",
          "Seasonal cash flow",
          "Flexible payment terms",
          "High-value layaway plans",
          "Interest-free campaign loans",
          "Working capital support",
          "Crowdfunding for artisans",
          "Pre-approved credit lines",
          "Deferred payment solutions",
          "Revenue-linked financing programs",
          "Financial education workshops",
          "International tax assistance",
        ],
      },
    ],
  };

  const tableData = {
    heading: "Platform Parameters",
    list: [
      "Shared Retail Spaces",
      "Customizable Displays",
      "Real-Time Tracking",
      "Centralized Warehousing",
      "Phygital Experiences",
      "Omni-Channel Integration",
      "Artisan Training Programs",
      "Visa and Travel Support",
      "Customs Assistance",
      "Marketing Campaigns",
      "Loyalty Rewards Programs",
      "Eco-Friendly Workspaces",
      "Cultural Storytelling",
      "Flexible Leasing Options",
      "Seasonal Promotions",
      "Networking Lounges",
      "Packaging and Branding",
      "Customer Engagement",
      "Predictive Sales Analytics",
      "Integrated POS Solutions",
      "Transparent Pricing",
      "High-Value Product",
      "Community Building",
    ],
  };
  const costtableData = {
    heading: "Platform Cost",
    list: [
      "Brick & Mortar Location in United States of America",
      "Vendor Location In Store",
      "Vendor Space Size (Sqft)",
      "Monthly Rental Fees",
      "Monthly Maintenance Fees",
      "Monthly Branding Fees",
      "Monthly Utility Fees",
      "Total Yearly Fee",
      "Additional Fees",
      "Annual Referral Fee",
      "Annual Listing Fee",
      "Annual Vendor Training Fee",
      "Annual Campaign Fee",
      "Annual POS Fee",
      "Placement Fee (One Time)",
      "Transaction Fee",
      "Store Theme",
    ],
  };

  const platformData = [
    {
      platform: "De Koshur Crafts",
      heading: "Platform Cost",
      rows: [
        "High",
        "Highly Customizable",
        "Advanced Integration",
        "Available",
        "AR/VR tools",
        "High",
        "Kashmir Craft-Focused",
        "Fully Facilitated",
        "Seamless",
        "Tailored to Kashmir Crafts",
        "Comprehensive, Tier-Based",
        "Integrated",
        "Extensive Kashmir Focus",
        "Vendor-Specific",
        "Supported",
        "Available",
        "Available",
        "Kashmir Live Demos",
        "Advanced Insights",
        "Seamless",
        "High",
        "Kashmir Crafts",
        "Kashmir Artisan-Oriented",
      ],
    },
    {
      platform: "Makers Market",
      heading: "Platform Cost",
      rows: [
        "Limited",
        "Minimal",
        "Limited",
        "Limited",
        "None",
        "Moderate",
        "Minimal",
        "None",
        "Minimal",
        "Minimal",
        "Limited",
        "None",
        "None",
        "Limited",
        "Minimal",
        "None",
        "Limited",
        "Limited",
        "Limited",
        "Moderate",
        "Variable",
        "None",
        "None",
      ],
    },
    {
      platform: "10,000 Villages",
      heading: "Platform Cost",
      rows: [
        "Moderate",
        "Moderate",
        "Moderate",
        "Limited",
        "None",
        "Low",
        "Limited",
        "None",
        "None",
        "Moderate",
        "Minimal",
        "Limited",
        "Moderate",
        "Variable",
        "Limited",
        "Limited",
        "None",
        "None",
        "None",
        "Limited",
        "Moderate",
        "None",
        "None",
      ],
    },

    {
      platform: "Artisan’s Marketplace",
      heading: "Cost Structure",

      rows: [
        "Low",
        "Variable",
        "None",
        "None",
        "Low",
        "None",
        "None",
        "None",
        "None",
        "Limited",
        "None",
        "None",
        "Limited",
        "Variable",
        "None",
        "None",
        "None",
        "None",
        "None",
        "None",
        "Limited",
        "Minimal",
        "None",
      ],
    },
  ];
  const costplatformData = [
    {
      platform: "De Koshur Crafts",
      heading: "Platform Cost",
      rows: [
        "California, Texas, New York, Florida, Illinois, Georgia, Virgina",
        "Back, Main Aisle, Front ",
        "Up to 50, 50-100, 100-200",
        "$1000, $1300, $2500",
        "$250, $300, $400",
        "$50, $100, $200",
        "$80, $100, $150",
        "$16560, $21600, $38400",
        "&nbsp",
        "2%",
        "$1 per Item",
        "$150",
        "$500 ",
        "$100",
        "$500",
        "1%",
        "Kashmir Craft Oriented",
      ],
    },
    {
      platform: "Makers Market",
      heading: "Platform Cost",
      rows: [
        "Illinois, Ohio, Georgia, North Carolina, Pennsylvania",
        "Back, Main Aisle, Front",
        "Up to 50, 50-100, 100-200",
        "$1500, $2000, $3000",
        "$350, $500, $700",
        "$200, $300, $500",
        "$100, $150, $200",
        "$26400, $36600, $52800",
        "&nbsp",
        "3%",
        "$12 per Item",
        "$300",
        "$400",
        "$800",
        "$999",
        "2.5%",
        "Global Craft Oriented",
      ],
    },
    {
      platform: "10,000 Villages",
      heading: "Platform Cost",
      rows: [
        "Pennsylvania, North Carolina, Massachusetts",
        "Back, Main Aisle, Front",
        "Up to 50, 50-100, 100-200",
        "$1700, $2100, $3200",
        "$250, $350, $600",
        "$100, $150, 300",
        "$120, $200, $250",
        "$25440, $34800, $50400",
        "&nbsp",
        "4%",
        "$14 per Item",
        "$200",
        "$400",
        "$800",
        "$1200",
        "2.9%",
        "Global Craft Oriented",
      ],
    },
    {
      platform: "Artisan’s Marketplace",
      heading: "Platform Cost",
      rows: [
        "California, Texas, North Carolina, Georgia, Virginia, Colorado",
        "Back, Main Aisle, Front",
        "Up to 50, 50-100, 100-200",
        "$1900, $2300, $3500",
        "$450, $500, $750",
        "$250, $300, $400",
        "$150, $200, $300",
        "$32400, $38400, $57600",
        "&nbsp",
        "5%",
        "$14 per Item",
        "$500",
        "$900",
        "$1300",
        "$1400",
        "3%",
        "Global Craft Oriented",
      ],
    },
  ];

  const faqAreaItems = [
    {
      title: "Business Registration",
      content: `Vendors must have a valid business registration or artisan certification from an accredited body. Compliance with local, regional, and international trade laws is mandatory.`,
    },
    {
      title: "Product Authenticity",
      content: `Products must reflect authentic Kashmiri craftsmanship or heritage. Proof of authenticity, such as GI certification, is required.`,
    },
    {
      title: "Quality Standards",
      content: `Vendors must meet stringent quality benchmarks for product durability and craftsmanship. Regular quality inspections will be conducted.`,
    },
    {
      title: "Sustainability and Ethical Practices",
      content: `Products should adhere to eco-friendly and ethical production methods Vendors must provide documentation of sustainability efforts.`,
    },
    {
      title: "Inventory and Product Availability",
      content: `Vendors should maintain adequate stock levels to meet store demand. Timely restocking and inventory management are critical.`,
    },
    {
      title: "Digital Readiness",
      content: `Vendors should have basic digital tools or be willing to adapt to the store's inventory and sales tracking systems.`,
    },
    {
      title: "Financial Stability",
      content: `Vendors must demonstrate financial stability to ensure consistent supply and operations.`,
    },
    {
      title: "Compliance with Store Policies",
      content: `Vendors must agree to all store policies, including display guidelines, return policies, and operational standards.`,
    },
    {
      title: "Participation in Training Programs",
      content: `Vendors are required to participate in training sessions on customer engagement, merchandising, and operational excellence.`,
    },
    {
      title: "Commitment to Transparency",
      content: `Vendors must maintain transparency in pricing, sourcing, and operational processes.`,
    },
    {
      title: "Retention Period and Key Performance Indicator (KPI) Score",
      content: `Vendors must meet a minimum retention period (e.g., 24 months for Brick-and-Mortar partnerships). </br>
A KPI score (e.g., maintain a minimum of 8 across performance metrics) is required to progress to the next level of partnership
`,
    },
  ];
  const servicesData = [
    {
      title: "Kashmiri Products",
      description: "Authentic GI-certified, handmade Kashmiri products.",
      image: service1,
      category: "Buyers",
    },
    {
      title: "Immersive Experiences",
      description: "AR/VR displays for real-life product previews.",
      image: service2,
      category: "Buyers",
    },
    {
      title: "Tailored Shopping",
      description: "Curated collections and personalized recommendations.",
      image: service3,
      category: "Buyers",
    },
    {
      title: "Eco-Friendly",
      description:
        "Sustainable, ethically sourced products - conscious consumers.",
      image: service4,
      category: "Buyers",
    },
    {
      title: "Premium Access",
      description: "High-end retail spaces in strategic locations.",
      image: service4,
      category: "Vendors",
    },
    {
      title: "Brand Building",
      description:
        "Storytelling-focused displays enhancing vendor credibility.",
      image: service4,
      category: "Vendors",
    },
    {
      title: "Operational Support",
      description: "Inventory, logistics, and packaging tools provided.",
      image: service4,
      category: "Vendors",
    },
    {
      title: "Skill Development",
      description: "Training aligned with global retail best practices.",
      image: service4,
      category: "Vendors",
    },
    {
      title: "Sustainability Leadership",
      description:
        "Promotes eco-friendly, low-carbon retail operations globally",
      image: service4,
      category: "Industry",
    },
    {
      title: "Craftsmanship Assurance",
      description: "Ensures product quality and compliance standards.",
      image: service4,
      category: "Industry",
    },
    {
      title: "Heritage Preservation",
      description:
        "Celebrates Kashmir’s rich cultural legacy through partnerships.",
      image: service4,
      category: "Industry",
    },
    {
      title: "Global Collaboration",
      description: "Connects artisans, vendors, and buyers for growth.",
      image: service4,
      category: "Industry",
    },
  ];
  const faqData = [
    {
      title: "General Questions",
      questions: [
        {
          question: "Business Registration",
          answer:
            "Vendors must provide proof of a valid business license or registration.",
        },
        {
          question: "How do I register?",
          answer: "<p>You can register by filling out the form...</p>",
        },
      ],
    },
  ];

  const countersData = [
    {
      target: 14099,
      range: "(1-5)",
      size: "Small",
      location: "Back",
      discount: "14.86%.",
    },

    {
      target: 18099,
      range: "(11-15)",
      size: "Medium",
      location: "Middle",
      discount: "16.2%",
    },

    {
      target: 31372,
      range: "(21+)",
      size: "Large",
      location: "Front",
      discount: "18.3%",
    },
  ];

  const Counterheading =
    "Early Adopter Monthly De Koshur Crafts-USA Brick & Mortar Platform Fees.";
  const HowItworksphases = [
    "Registration Phase",
    "Document Submission Phase",
    "Eligibility Review Phase",
    "Agreement and Certification Phase",
    "Store Space Assignment and Profile Setup Phase",
    "Profile Setup Phase Installation",
    "Partnership-Specific Onboarding Phase",
    "Training and Resource Checkup Phase",
    "In-Store Portal Access and Activation Phase",
    "Portal Access Activation Phase",
    "Partnership Launch and Support Phase",
    "KPI and Marketplace Engagement Phase",
  ];
  const HowItWorksbuttons = {
    readMoreText: "Read More",
    readMoreLink: "/about",
    icon: icon22,
    arrowIcon: rightArrow,
  };

  const VendorContentData = [
    {
      title: "E-commerce",
      description: "Harness DKC’s advanced Tier 8 online digital ecosystem",
      image: img1,
      link: "/ecommerce",
    },
    {
      title: "Brick & Mortar",
      description: "Shared physical stores with omni-channel synergy",
      link: "/brick-mortar",
      image: img2,
    },
    {
      title: "Import Export",
      description: "Optimize inventory through dynamic consignment innovation",
      link: "/importexport",
      image: img3,
    },
    {
      title: "Consignment",
      description: "Showcase products at transformative global exhibitions",
      link: "/consignment",
      image: img4,
    },
    {
      title: "Exhibition",
      description: "Scale globally with streamlined trade network solutions",
      link: "/exhibition",
      image: img5,
    },
    {
      title: "Subsidary",
      description: "Lead markets through exclusive franchise ownership",
      link: "/subsidary",
      image: img6,
    },
    {
      title: "Franchise",
      description: "Unlock exclusive privileges with subsidiary status",
      link: "/franchise",
      image: img7,
    },
  ];

  const PriceServiceservicesData = [
    {
      title: "Starter Plan ($30)",
      description:
        "Free platform onboarding. Basic tools for product uploads and catalog management.Dedicated support for the first 3 months.",
      image: "assets/PLAN/1.png",
    },
    {
      title: "Basic Plan ($179)",
      description:
        "All Starter Plan benefits. Free marketing templates for social media promotion. Customer support for the first 6 months.",
      image: "assets/PLAN/2.png",
    },
    {
      title: "Growth Plan ($311)",
      description:
        "Includes all Basic Plan benefits. Free listing optimization tools. One-on-one business consultations.",
      image: "assets/PLAN/3.png",
    },
    {
      title: "Premium Plan ($1,199)",
      description:
        "Includes all Growth Plan benefits. Branding services (logo and store design). Access to advanced analytics tools.",
      image: "assets/PLAN/4.png",
    },
    {
      title: "Elite Plan ($1,499)",
      description:
        "Includes all Premium Plan benefits. 3 months of free shipping. Access to premium marketing campaigns",
      image: "assets/PLAN/5.png",
    },
    {
      title: "Platinum Plan ($1,999)",
      description:
        "Includes all Elite Plan benefits. Exclusive marketplace promotions. Personal account manager for 12 months.",
      image: "assets/PLAN/6.png",
    },
  ];

  const PriceServiceheading = "Explore Our Flexible Pricing Plans";
  const PriceServicesubheading = "Choose the perfect plan for your needs";
  const PriceServicebuttonText = "Get Started";

  const faqContent = [
    {
      title: "Vendor Registration",
      questions: [
        {
          question: "How do I become a vendor on the platform?",
          answer:
            "You need to register through our partnership application portal, meet the eligibility criteria, and submit the required documentation. Once approved, you'll be guided through the onboarding process.",
        },
        {
          question: "What are the eligibility criteria for vendors?",
          answer:
            "Vendors must offer authentic, high-quality products that align with Kashmiri craftsmanship, adhere to sustainability standards, and meet legal requirements.",
        },
        {
          question: "Is there a fee to join the platform?",
          answer:
            "Yes, yearly fees vary depending on the vendor tier and space size. For example, Tier 1 vendors pay $14,099 annually, while Tier 5 vendors pay $24,000.",
        },
        {
          question: "What documentation is required for registration?",
          answer:
            "Documents include business registration certificates, product portfolios, proof of sustainability or GI certifications, and a valid ID.",
        },
        {
          question: "How long does the approval process take?",
          answer:
            "The approval process typically takes 2-4 weeks, depending on the completeness of your submission and the review process.",
        },
      ],
    },
    {
      title: "Product Management",
      questions: [
        {
          question: "How do I list my products?",
          answer:
            "Once approved, you'll work with our team to set up your assigned space based on your tier. We provide display guidelines to ensure a cohesive store experience.",
        },
        {
          question:
            "Are there restrictions on the types of products I can list?",
          answer:
            "Yes, all products must align with Kashmiri craftsmanship, cultural heritage, and sustainability standards. Counterfeit or non-compliant products are strictly prohibited.",
        },
        {
          question: "Can I update or modify my product listings?",
          answer:
            "Yes, product updates or modifications can be coordinated with our store management team to ensure smooth transitions.",
        },
        {
          question: "How is product authenticity verified?",
          answer:
            "Our team conducts thorough checks, including reviewing GI certifications and artisan credentials, to ensure product authenticity.",
        },
        {
          question: "What support is available for product presentation?",
          answer:
            "We provide training in visual merchandising and offer assistance in optimizing your display for customer engagement.",
        },
      ],
    },
    {
      title: "Payments and Fees",
      questions: [
        {
          question: "How are payments processed?",
          answer:
            "Payments are processed weekly, with detailed sales reports provided to vendors through our vendor portal.",
        },
        {
          question: "What fees are associated with selling on the platform?",
          answer:
            "Fees include the annual space rental based on your tier. Additional charges may apply for premium marketing or prime store locations.",
        },
        {
          question: "Are there additional fees for optional services?",
          answer:
            "Yes, vendors opting for front-store placements or large display areas may incur additional fees.",
        },
        {
          question: "How do I track my earnings?",
          answer:
            "Earnings can be tracked through the vendor portal, which provides real-time updates on sales and transactions.",
        },
        {
          question: "Are there discounts for multi-year partnerships?",
          answer:
            "Yes, multi-year commitments come with tiered discounts and priority placement opportunities.",
        },
      ],
    },
    {
      title: "Training and Support",
      questions: [
        {
          question:
            "Does the store offer training for product display and customer interaction?",
          answer:
            "Yes, we offer regular training sessions on display techniques, customer engagement, and retail trends.",
        },
        {
          question: "How do I access vendor support for operational issues?",
          answer:
            "Vendors are assigned a dedicated support representative and can reach out via our vendor portal or helpline.",
        },
        {
          question: "Can I get additional marketing and promotional support?",
          answer:
            "Yes, optional marketing packages include in-store promotions, social media campaigns, and event participation.",
        },
        {
          question:
            "Are there networking opportunities with other vendors or industry leaders?",
          answer:
            "Yes, we organize regular networking events, workshops, and collaborations for vendors to connect and grow.",
        },
      ],
    },
    {
      title: "Policies and Compliance",
      questions: [
        {
          question: "What happens if I don’t comply with platform policies?",
          answer:
            "Non-compliance may result in penalties, suspension, or termination of your partnership, depending on the severity of the violation.",
        },
        {
          question: "Do I need to maintain a minimum stock level in the store?",
          answer:
            "Yes, vendors must maintain adequate stock levels to ensure consistent product availability.",
        },
        {
          question: "How are disputes or customer returns handled?",
          answer:
            "Disputes and returns are managed through our customer service team. Vendors will be notified and guided on the resolution process.",
        },
        {
          question: "Can I sell the same products outside of the store?",
          answer:
            "Yes, as long as it doesn’t conflict with exclusive arrangements or agreements made with the store.",
        },
        {
          question: "Can I lose my partnership due to non-compliance?",
          answer:
            "Yes, repeated or significant violations of policies may lead to termination of the partnership.",
        },
      ],
    },
  ];

  const highlightedTexts = ["No", "None", "High", "Highly", "Advanced"];
  const GreenHighlightedTexts = ["Yes", "yess"];
  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="DKC Brick and Mortar Platform Partnership Overview"
        mainHeading="Empowering Kashmiri Handicraft Vendors through US Physical "
        mainHeadingHighlight="Market Presence"
        description="Transform your business with De Koshur Crafts’ Brick and Mortar Partnership program, designed to integrate Kashmiri artisans and businesses into dynamic shared spaces and physical storefronts in the USA. By providing operational support, warehousing, marketing, and logistics, we bring Kashmir’s timeless crafts closer to international consumers."
        iconImage={aboutIcon}
        iconTitle="Shared Physical Infrastructure for Handicraft Ecosystem"
        textDetails="A network of physical retail locations offering visibility for vendors, warehousing solutions, visa assistance for artisans, marketing campaigns, and on-ground sales support. Our platform bridges the gap between traditional craftsmanship and modern retail demands, ensuring Kashmiri artisans thrive in global markets."
        buttonText="THE WORLD'S PREMIER PHYSICAL MARKETPLACE FOR KASHMIR CRAFTS"
        buttonSubText="ELEVATING KASHMIRI HANDICRAFTS IN THE US RETAIL SECTOR"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Innovative Phygital Solutions Tailored for "
        color_title="Vendors' Success"
        subtitle="TECHNOLOGY ADVANCEMENTS IN THE PARTNERSHIP"
        description="Our platform integrates cutting-edge advancements in physical and digital retail to empower Kashmiri artisans and vendors. Explore how we blend tradition with innovation to enhance global market interactions."
        items={[
          "Phygital Retail Optimization Tools",
          "Augmented Reality (AR) Displays",
          "In-Store Virtual Try-Ons",
          "Haptic Feedback Product Testing",
          "Predictive Inventory Analytics",
          "Geo-Fencing for Targeted Campaigns",
          "Dynamic Product Showcases",
          "Seamless Omnichannel Customer Journeys",
          "AI-Driven In-Store Assistance",
          "Integrated POS for Omni Sales",
          "Smart Shelf Management Systems",
          "Enhanced Customer Feedback Systems",
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare To Other Platforms"
        sectionSubtitle="De Koshur Crafts USA Brick & Mortar Vendor Partnership
"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts Brick and Mortar Platform Eligibility "
        mainTitleHighlight="Criteria"
        faqAreaTitle="Check Your Vendor"
        faqAreaTitleHighlight="Eligibility."
        imageSrc={elib}
      />
      <AfterFAQ
        title="Are You A Register Vendor At DKC Ecommerce Platform?"
        color_title="Do You Possess Required Rentention Time & KPI of Ecommerce Platform!"
        subtitle="Technology Advancements in the Platform"
        description="If No - We have Lateral Paid Multi-Path Eligibility, a fee-based alternative progression system within the partnership framework . This is an alternative path for vendors who want to progress but may not meet all standard criteria of E Commerce Vendor Partnership Minimum Retention Period  of Minimum 18 Months and 
Key Performance Indicator Score Maintained at Minimum 7+ in order to qualify Brick & Mortar Vendor Partnership."
        under_description="Available Package"
        package_heading="Tailored Solutions for Retention and KPI Challenges"
        package_heading2="How Lateral Paid Multi-Path Eligibility Maintain DKC Platform Standards ?"
        itemss={[
          "<b><span style={{color:}}>One-Time Waiver Ensures Accountability</b></br> The program is built on a foundation of accountability and fairness. These paths are not recurring exemptions but one-time waivers that allow vendors to overcome specific barriers like retention periods or KPI scores",
          "<b>Core Partnership Fee Remains Unchanged</b></br>The integrity of DKC’s vendor ecosystem is maintained by keeping the core partnership fee for Brick-and-Mortar Vendor Partnerships unchanged. This commitment ensures a level playing field for all participants",
          "<b>Exclusively for Recognized Handicraft Businesses</b></br>The Lateral Paid Multi-Path Eligibility initiative is a specialized program crafted exclusively for businesses recognized under Kashmir handicraft framework.",
        ]}
        items={[
          "<b><span style={{color:}}>Retention Barrier Solution Package ($1,000).</span></b></br> <i>Immediate Eligibility for Progression</i> : Skip the required retention period and gain instant access to mid-tier Brick-and-Mortar opportunities.</br> Customized Support for Early Growth : Receive tailored resources to address foundational challenges, such as operational planning and market positioning.</br> Accelerate Time-to-Benefits : Begin reaping partnership advantages, like enhanced visibility and networking, without waiting for retention milestones.",
          "<b>KPI Score Solution Package ($1,000).</b></br> <i>Direct Access to Advanced Partnerships</i> : Overcome KPI score limitations to qualify for Brick-and-Mortar partnerships and other growth-level opportunities.</br> Performance Enhancement Resources : Gain access to tools and strategies to improve future KPI performance while advancing your current business goals.</br> Priority Growth Support : Receive guidance on branding, logistics, and customer engagement to align with long-term partnership requirements.",
        ]}
        description2=""
        third_heading="A Catalyst, Not a Shortcut"
      />
      <CompareToOther
        sectionTitle="Compare Cost Affordability"
        sectionSubtitle="De Koshur Crafts USA Brick & Mortar Vendor Partnership Platform"
        platformData={costplatformData}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <CounterArea countersData={countersData} heading={Counterheading} />;
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Experience a seamless journey from registration to marketplace
                leadership through DKC’s transformative onboarding process,
                empowering vendors with tools, training, and support to thrive
                in a global marketplace"
        phases={HowItworksphases}
        buttons={HowItWorksbuttons}
        imageSrc={aboutImg}
        iconSrc={rightArrow}
        bookingIconSrc={booking}
        consultationText="Partner Smarter: Pre-Registration Consultation"
        consultationLink="/book"
      />
      <FAQSectionDynamic
        faqContent={faqContent}
        sectionTitle="FAQ"
        mainTitle="Frequently Asked Questions (FAQs) for "
        mainTitleHighlight="Vendors."
      />
      <FooterUpper imageSrc={ecommerceImage} altText="Ecommerce" />
      <FooterUpperwithoutLink imageSrc={parpro} altText="Ecommerce" />
      <VendorPartnership
        bgImage="/assets/how_to_work_bg.svg"
        logo={logo}
        title="Partnership"
        subtitle="Exclusive Partners"
        description="Join our network of trusted partners."
        content={VendorContentData}
        partnershipTierText="Exclusive Partnership Tier"
      />
      <ContactUs
        title="Get In Touch with Us"
        subtitle="Have questions or want to start a partnership? We would love to hear from you!"
        imageSrc="/assets/images/contact-image.png"
        placeholders={{
          name: "Full Name *",
          email: "Your Email Address *",
          subject: "Partnership Inquiry *",
          phone: "Phone Number *",
          message: "Your Message",
        }}
        buttonText="Send Message"
      />
      <FooterArea />
    </>
  );
};

export default BrickPage;
