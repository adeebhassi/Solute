import React from "react";
import HeroSection from "../../components/OurPartnerShip/HeroSection";
import heroImage from "../../assets/images/PARTNERSHIP/1.png";
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
import FooterUpperwithoutLink from "../../components/Shared-Components/FooterUpperWithoutLink";
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
import ecommerceImage from "../../assets/images/EcomFooterUpper.png";
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

import FaqArea from "../../components/OurPartnerShip/FAQArea";
import FAQSectionDynamic from "../../components/OurPartnerShip/FaqSection";

import service1 from "../../assets/images/12 icon red/1.png";
import service2 from "../../assets/images/12 icon red/2.png";
import service3 from "../../assets/images/12 icon red/3.png";
import service4 from "../../assets/images/12 icon red/4.png";
import service5 from "../../assets/images/12 icon red/5.png";
import service6 from "../../assets/images/12 icon red/6.png";
import service7 from "../../assets/images/12 icon red/7.png";
import service8 from "../../assets/images/12 icon red/8.png";
import service9 from "../../assets/images/12 icon red/9.png";
import service10 from "../../assets/images/12 icon red/10.png";
import service11 from "../../assets/images/12 icon red/11.png";
import service12 from "../../assets/images/12 icon red/12.png";

import priceservice1 from "../../assets/images/PLAN/1.png";
import priceservice2 from "../../assets/images/PLAN/2.png";
import priceservice3 from "../../assets/images/PLAN/3.png";
import priceservice4 from "../../assets/images/PLAN/4.png";
import priceservice5 from "../../assets/images/PLAN/5.png";
import priceservice6 from "../../assets/images/PLAN/6.png";

const EcommercePage = () => {
  const heroSectionData = {
    heading1: "DKC ECOMMERCE VENDOR PARTNERSHIP",
    heading2:
      "Supporting Kashmir's Struggling Artisans, Businesses, and Startups",
    heading3: "",
    description:
      "Empowering the Heart of Kashmir: Reviving Craft, Innovation, and Opportunity",
    buttonText: "KASHMIR HANDICRAFT SECTOR EXCLUSIVELY",
    buttonLink: "#",
    heroImage: heroImage,
    heroShapeImage: heroShape,
  };

  const caseStudyContent = {
    title: "Key Features of Our E-Commerce Vendor Partnership",
    subtitle:
      "Platform Engineered in San Francisco, US – Tailored to Empower Kashmiri Artisans for Success in ",
    colortitle: "US Digital Market",
    categories: [
      { key: "all", label: "All" },
      { key: "architecture", label: "Architecture" },
      { key: "integrations", label: "Integrations" },
      { key: "content", label: "Content" },
      { key: "security", label: "Security" },
      { key: "marketing", label: "Marketing" },
      { key: "engagement", label: "Engagement" },
      { key: "loyalty", label: "Loyalty" },
      { key: "financing", label: "Financing" },
    ],
    caseStudyData: [
      {
        category: "architecture",
        title: "Mach Architecture Commerce Capabilities",

        features: [
          "Microservices Tier-8 Architecture",
          "API-First Approach",
          "Cloud-Native Infrastructure",
          "Headless Functionality",
          "Advanced Database Management",
          "Geofencing Integration",
          "Event-Driven Architecture",
          "Security-First Design",
          "Progressive Web Application (PWA) Support",
          "AI-Driven Personalization",
          "Scalable Infrastructure for Growth",
          "Real-Time Analytics & Monitoring",
        ],
      },
      {
        category: "integrations",
        title: "API Integrations",
        features: [
          "Storefront & Customer Experience APIs",
          "Stripe Radar API",
          "Faceted Search & Voice Commerce APIs",
          "Shipping and Packaging APIs",
          "Order Management and Fulfillment APIs",
          "Advanced Chatbot Integration",
          "Payment Gateway APIs",
          "Social Media Integration APIs",
          "Marketing Automation APIs",
          "Customer Analytics APIs",
          "Return Management APIs",
          "Loyalty & Rewards APIs",
        ],
      },
      {
        category: "content",
        title: "Content Management System (CMS)",

        features: [
          "Advanced Content Authoring Features",
          "Centralized Content Repository",
          "Advanced Content Modeling",
          "Personalized Content Delivery",
          "A/B Testing",
          "Content Tagging & Categorization",
          "Omni-Channel Content Distribution",
          "Content Version Control",
          "Digital Asset Management (DAM)",
          "SEO-Optimized Content Management",
          "Multilingual Content Support",
          "Content Performance Analytics",
        ],
      },
      {
        category: "security",
        title: "Security Features",
        description:
          "Protecting Kashmiri Artistry and Customer Trust with Tier-8 Security Standards.",
        features: [
          "PCI Compliance",
          "Intrusion Detection",
          "Secure API Gateways",
          "Data Security & Encryption",
          "Identity & Access Management (IAM)",
          "Security Monitoring & Threat Detection",
          "Multi-Factor Authentication (MFA)",
          "Vulnerability Scanning & Penetration Testing",
          "Web Application Firewall (WAF)",
          "Runtime Application Self-Protection (RASP)",
          "Threat Intelligence Integration",
          "Cloud Security Posture Management",
        ],
      },
      {
        category: "marketing",
        title: "Marketing Features",
        description:
          "Empowering Kashmiri Handicrafts with US-Centric Marketing Precision.",
        features: [
          "Personalization & Customer Segmentation",
          "Multi-Channel Marketing Automation",
          "AI-Powered Content Marketing & Chatbots",
          "Geographic Segmentation Marketing",
          "Demographic Segmentation Marketing",
          "Return on Investment Tracking Marketing",
          "Behavioral Targeting",
          "Predictive Analytics for Marketing",
          "Campaign Attribution Modeling",
          "Social Media Listening & Engagement",
          "Email Campaign Automation",
          "Dynamic Content Optimization",
        ],
      },
      {
        category: "engagement",
        title: "Additional Customer Engagement Formats",
        description:
          "Innovative Formats to Connect US Buyers with Kashmir's Timeless Craftsmanship.",
        features: [
          "Digital Catalogs",
          "Digital Lookbooks",
          "Product Videos",
          "Virtual Try-Ons",
          "Mailing Catalogs",
          "3D Product Configurators",
          "Interactive Infographics",
          "Live Product Demos",
          "Augmented Reality Showrooms",
          "Customer Review Galleries",
          "User-Generated Content Integration",
          "Personalized Product Recommendations",
        ],
      },
      {
        category: "loyalty",
        title: "Customer Loyalty Programs",
        description:
          "Building Long-Term Relationships Through Rewarding Experiences for Kashmiri Craft Enthusiasts.",
        features: [
          "Points-Based Loyalty Programs",
          "Tiered Loyalty Programs",
          "Paid Membership Programs",
          "Referral Program",
          "Gamified Loyalty Programs",
          "Partnership Programs",
          "Exclusive Member Discounts",
          "Anniversary & Birthday Rewards",
          "Early Access to Sales",
          "Surprise & Delight Rewards",
          "VIP Customer Tiers",
          "Charity-Based Loyalty Programs",
        ],
      },
      {
        category: "financing",
        title: "Customer Financing Options",
        description:
          "Flexible Financing Tailored to Elevate Kashmir Handicrafts in the US Market.",
        features: [
          "DKC Store-Branded Credit Cards",
          "Installment Payment Plans",
          "Buy Now, Pay Later (BNPL)",
          "Lease-to-Own Programs",
          "Layaway Plans",
          "Deferred Interest Financing",
          "Flexible Payment Schedules",
          "No-Interest Promotional Financing",
          "Custom Financing for High-Value Purchases",
          "Reward-Linked Financing Options",
          "Seasonal Financing Promotions",
          "Pre-Approved Credit Options",
        ],
      },
    ],
  };

  const tableData = {
    heading: "Platform Parameters",
    list: [
      "Breadth of Handicraft Products",
      "Kashmir Heritage Focus",
      "Kashmir Entire Product Line",
      "Seller Verification",
      "Artisan Support",
      "GI Tags/Certifications",
      "Origin Traceability",
      "Fair Trade Policies",
      "Eco-friendly Practices",
      "Cultural Storytelling",
      "Multimedia Content",
      "Personalized Suggestions",
      "Thematic Collections",
      "Pricing Transparency",
      "Value-Added Services",
      "International Shipping",
      "Localization",
      "B2B Networking",
      "Forums/Engagement",
      "Customer Education",
      "Return Policies",
      "Brand Trust",
      "Influencer Partnerships",
    ],
  };
  const costtableData = {
    heading: "Platform Cost",
    list: [
      "Starter Plan (Monthly)",
      "Basic Plan (Monthly)",
      "Growth Plan (Monthly)",
      "Premium Plan (Monthly)",
      "Transaction Fees",
      "Listing Fees",
      "Payment Processing Fees",
      "GI Certification Support",
      "Marketing Tools Fee",
      "Advertising Costs",
      "Shipping Costs",
      "Return Costs",
      "Eco-Friendly Practices",
      "B2B Networking Fees",
      "Training & Support",
      "Loyalty Rewards",
      "Blockchain Traceability",
      "Custom Branding",
      "Multimedia Storytelling",
    ],
  };

  const platformData = [
    {
      platform: "De Koshur Crafts",
      rows: [
        "Extensive Handicraft Product Offerings",
        "Strong heritage emphasis",
        "Full Kashmir Craft Representation",
        "Thorough Process",
        "High Artisan Support",
        "Prominent",
        "Detailed Blockchain",
        "Fair Artisan Wages",
        "Integrated",
        "Extensive",
        "Rich Visual Storytelling",
        "Highly Curated",
        "Seasonal/Festival",
        "Highly Transparent",
        "Custom Logistics",
        "Artisan-Focused",
        "Artisan-Oriented",
        "Strong",
        "Planned",
        "Extensive Resources",
        "Tailored Artisan Returns",
        "Emerging Cultural Trust",
        "Planned",
      ],
    },
    {
      platform: "Amazon Platform",
      rows: [
        "Broad Handicraft Product Selection",
        "Minimal Heritage Focus",
        "No-Full Representation of Kashmir Craft",
        "Moderate Seller Checks",
        "No Artisan Support",
        "No GI Certifications",
        "Limited Traceability",
        "Minimal Trade Policies",
        "Moderate Eco Efforts",
        "No-Cultural Storytelling",
        "Limited Content",
        "Advanced System",
        "Limited Theme",
        "Moderate Transparency",
        "High-value Services",
        "Extensive",
        "Broad Strategy",
        "Limited Networking",
        "No Engagement Forums",
        "Limited Education",
        "Flexible Return Policies",
        "Very High Trust",
        "Extensive Partnerships",
      ],
    },
    {
      platform: "Etsy Platform",
      rows: [
        "Moderate Product Varibility",
        "Moderate Heritage Focus",
        "Lacks Product Completeness",
        "Moderate Verification",
        "Limited Artisan Support",
        "Limited GI Recognition",
        "Moderate Traceability",
        "Moderate Fair Trade",
        "Optional Practices",
        "Limited Storytelling",
        "Moderate Content",
        "Moderate Suggestions",
        "Seasonal Thematic",
        "High Transparency",
        "Minimal Services",
        "Moderate Shipping",
        "Moderate Localization",
        "Lacks Networking",
        "Moderate Engagement",
        "Moderate Education",
        "Moderate Policies",
        "High Brand Trust",
        "Limited Partnerships",
      ],
    },
    {
      platform: "eBay Platform",
      rows: [
        "Generalist Product Offerings",
        "Low Heritage Focus",
        "No Complete Products",
        "Low Seller Verification",
        "No Artisan Support",
        "No GI Certifications",
        "Minimal Traceability",
        "No Fair Trade Policies",
        "Low Practices",
        "No-Cultural Storytelling",
        "Limited Content",
        "Limited Suggestions",
        "No Thematic Collections",
        "High Transparency",
        "Low Services",
        "Moderate Shipping",
        "Limited Features",
        "No Business Networking",
        "No Engagement Forums",
        "Limited Education",
        "Variable Return Policies",
        "Moderate Brand Trust",
        "No Partnerships",
      ],
    },
    {
      platform: "Shopify Platform",
      rows: [
        "Customizable Product Range",
        "Low Heritage Emphasis",
        "No Comprehensive Products",
        "Low Seller Verification",
        "No Artisan Support",
        "No GI Certifications",
        "Minimal Traceability",
        "No Fair Policies",
        "Low Practices",
        "No-Cultural Storytelling",
        "Minimal Content",
        "Variable Suggestions",
        "Minimal Thematic",
        "Variable Transparency",
        "Variable Services",
        "Variable Shipping",
        "Variable Support",
        "Low Business Networking",
        "No Engagement Forums",
        "Limited Education",
        "Variable Return Policies",
        "Variable Brand Trust",
        "Limited Partnerships",
      ],
    },
  ];
  const costplatformData = [
    {
      platform: "De Koshur Crafts",
      rows: [
        "Free/Early Adapters After $2.50",
        "Free/Early Adapters After $14.99",
        "Free/Early Adapters After $25.99",
        "Free/Early Adapters After $99.99",
        "Flat 1.5%",
        "None",
        "None",
        "Free",
        "Free",
        "Free",
        "Subsidized",
        "Platform-Assisted",
        "Standard (No extra cost)",
        "Free",
        "Free",
        "Available (Fee Discounts)",
        "Free",
        "Free",
        "Free",
      ],
    },
    {
      platform: "Amazon Platform",
      rows: [
        "$0.99/item (no plan)",
        "$39.99/month",
        "$39.99/month",
        "Custom Pricing via FBA",
        "6%–45% (Avg.15%)",
        "None",
        "Included in Referral Fee",
        "No Service",
        "Paid",
        "Paid (Sponsored Ads)",
        "FBA or vendor-defined",
        "Vendor or Amazon (Varies)",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
        "Paid",
        "Paid",
      ],
    },

    {
      platform: "eBay Platform",
      rows: [
        "$4.95",
        "$21.95/month",
        "$59.95/month",
        "$299.95–$2,999",
        "~12.9% + $0.30",
        "$0.30/item after 250 free",
        "Included in Transaction",
        "No Service",
        "Paid (starts at $4.95/month)",
        "Paid (CPC/CPA-based)",
        "Vendor Responsibility",
        "Vendor Responsibility",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
      ],
    },
    {
      platform: "Shopify Platform",
      rows: [
        "$5",
        "$39/month",
        "$105/month",
        "~$2,000+ (Shopify Plus)",
        "2.9% + $0.30",
        "None",
        "2.9% + $0.30",
        "No Service",
        "Paid",
        "Paid",
        "Vendor Responsibility",
        "Vendor Responsibility",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
        "Paid",
        "Paid",
      ],
    },
  ];

  const faqAreaItems = [
    {
      title: "Business Registration",
      content: `Vendors must have a valid business registration or artisan certification from an accredited body.
                    Must comply with local, regional, or international trade laws, depending on the target market.`,
    },
    {
      title: "Product Authenticity",
      content: `Products must reflect authentic Kashmiri craftsmanship and sustainable practices.
                    Items must be handcrafted or incorporate significant artisanal techniques.
                    Vendors must provide proof of authenticity, such as Geographical Indication (GI) tags, if applicable.`,
    },
    {
      title: "Quality Standards",
      content: `Products must meet the platform’s quality standards, including durability, design, and finishing.
                    Vendors must ensure items are defect-free and meet international export requirements.`,
    },
    {
      title: "Sustainability and Ethical Practices",
      content: `Preference will be given to vendors using eco-friendly materials and processes.
                    Vendors must demonstrate fair labor practices and ethical treatment of artisans.`,
    },
    {
      title: "Inventory and Product Availability",
      content: `Vendors must maintain a consistent inventory of listed products.
                    Ready-to-ship products should align with the platform’s logistics and shipping timelines.`,
    },
    {
      title: "Digital Readiness",
      content: `Vendors need basic tools like computers or phones for management.
                    Vendors must provide high-quality product images, descriptions, and pricing for the platform.`,
    },
    {
      title: "Financial Stability",
      content: `Vendors must demonstrate the ability to fulfill orders and manage financial transactions securely.
                    A valid bank account or payment gateway setup is required for receiving payments.`,
    },
    {
      title: "Compliance with Platform Policies",
      content: `Vendors must comply with platform policies on returns and service.
                    Non-compliance may result in suspension or termination of the vendor account.`,
    },
    {
      title: "Participation in Training Programs",
      content: `Vendors must engage in platform training to meet global market standards.`,
    },
    {
      title: "Commitment to Transparency",
      content: `Vendors must disclose complete, transparent details about business and materials.`,
    },
  ];

  const servicesData = [
    {
      title: "Kashmiri Products",
      description:
        "Certified crafts with Geographical Indication (GI) tags and guaranteed authenticity.",
      image: service1,
      category: "Buyers",
    },
    {
      title: "Shopping Experience",
      description:
        "Advanced search filters, curated collections, and tailored product recommendations.",
      image: service2,
      category: "Buyers",
    },
    {
      title: "Immersive Visualization",
      description:
        "Augmented Reality (AR) and Virtual Reality (VR) showrooms for real-life product preview.",
      image: service3,
      category: "Buyers",
    },
    {
      title: "Eco-Friendly Choices",
      description:
        "Sustainable packaging and ethically sourced products for conscious consumers.",
      image: service4,
      category: "Buyers",
    },
    {
      title: "Global Market Access",
      description:
        "Showcase products to a worldwide audience through a high-traffic e-commerce platform.",
      image: service5,
      category: "Vendors",
    },
    {
      title: "Enhanced Branding",
      description:
        "Dedicated vendor pages with storytelling and marketing support to build credibility.",
      image: service6,
      category: "Vendors",
    },
    {
      title: "Operational Efficiency",
      description:
        "Tools for automated inventory management, packaging, and logistics support.",
      image: service7,
      category: "Vendors",
    },
    {
      title: "Development Resources",
      description:
        "Training programs and workshops to align with global standards and customer expectations.",
      image: service8,
      category: "Vendors",
    },
    {
      title: "Leadership",
      description:
        "Encourages eco-friendly production and reduces carbon footprint in the craft industry.",
      image: service9,
      category: "Industry",
    },
    {
      title: "Craftsmanship",
      description:
        "Ensures quality control and compliance with international standards for Kashmiri crafts.",
      image: service10,
      category: "Industry",
    },
    {
      title: "Heritage Promotion",
      description:
        "Preserves traditional craftsmanship and empowers artisan communities.",
      image: service11,
      category: "Industry",
    },
    {
      title: "Collaboration Opportunities",
      description:
        "Builds a strong ecosystem connecting artisans, businesses, and global buyers.",
      image: service12,
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
    { target: 30, range: "(1-30)", planName: "Starter Plan" },
    { target: 179.88, range: "(31-50)", planName: "Basic Plan" },
    { target: 311.88, range: "(51-70)", planName: "Growth Plan" },
    { target: 1199.88, range: "(71-85)", planName: "Premium Plan" },
    { target: 1499, range: "(86-100)", planName: "Elite Plan" },
    { target: 1999, range: "(100+)", planName: "Platinum Plan" },
  ];

  const Counterheading =
    "Early Adopter Yearly De Koshur Crafts-USA Ecommerce Platform Fees is Zero (2025-26)";

  const PricingServicesData = [
    {
      title: "Starter Plan ($30)",
      description:
        "Free platform onboarding. Basic tools for product uploads and catalog management.Dedicated support for the first 3 months.",
      image: priceservice1,
    },
    {
      title: "Basic Plan ($179)",
      description:
        "All Starter Plan benefits. Free marketing templates for social media promotion. Customer support for the first 6 months.",
      image: priceservice2,
    },
    {
      title: "Growth Plan ($311)",
      description:
        "Includes all Basic Plan benefits. Free listing optimization tools. One-on-one business consultations.",
      image: priceservice3,
    },
    {
      title: "Premium Plan ($1,199)",
      description:
        "Includes all Growth Plan benefits. Branding services (logo and store design). Access to advanced analytics tools.",
      image: priceservice4,
    },
    {
      title: "Elite Plan ($1,499)",
      description:
        "Includes all Premium Plan benefits. 3 months of free shipping. Access to premium marketing campaigns",
      image: priceservice5,
    },
    {
      title: "Platinum Plan ($1,999)",
      description:
        "Includes all Elite Plan benefits. Exclusive marketplace promotions. Personal account manager for 12 months.",
      image: priceservice6,
    },
  ];
  const HowItworksphases = [
    "Registration Phase",
    "Document Submission Phase",
    "Eligibility Review Phase",
    "Agreement and Certification Phase",

    "Profile Setup Phase Installation",
    "Partnership-Specific Onboarding Phase",
    "Training and Resource Checkup Phase",

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
            "Vendors must meet the eligibility criteria, register on the platform, and provide the required documentation for approval.",
        },
        {
          question: "What are the eligibility criteria for vendors?",
          answer:
            "Vendors must offer authentic Kashmiri crafts, adhere to quality standards, and comply with platform policies. Refer to the detailed eligibility criteria for more information.",
        },
        {
          question: "Is there a fee to join the platform?",
          answer:
            "Joining and selling on the platform is free for early adopters. Early adopters enjoy exclusive access to premium features without any charges during the introductory period.",
        },
        {
          question:
            "What will be the platform fee after filling the early adopters’ quota?",
          answer:
            "<b>Starter Plan ($30)</b> <br/> Free platform onboarding. Basic tools for product uploads and catalog management. Dedicated support for the first 3 months. <br/> <b>Basic Plan ($179)</b></br> Includes all Starter Plan benefits. Social media marketing templates.Priority support for the first 6 months.<br/> <b>Growth Plan ($311)</b> <br/>Includes all Basic Plan benefits.Free listing optimization tools.One-on-one business consultations. <br/> <b>Premium Plan ($1,199)</b> <br/>Includes all Growth Plan benefits.Branding services (logo and store design).Access to advanced analytics tools. <br/> <b>Elite Plan ($1,499) </b></br>Includes all Premium Plan benefits.3 months of free international shipping.Access to premium marketing campaigns. <br/> <b>Platinum Plan ($1,999) </b></br> Includes all Elite Plan benefits.Exclusive marketplace promotions.Personal account manager for 12 months",
        },
      ],
    },
    {
      title: "Product Management",
      questions: [
        {
          question: "How do I list my products?",
          answer:
            "Vendors can upload high-quality images, descriptions, and prices through the vendor dashboard. Training is available for first-time users.",
        },
        {
          question:
            "Are there restrictions on the types of products I can list?",
          answer:
            "Only authentic Kashmiri crafts that meet quality standards and are handcrafted or artisan-focused can be listed.",
        },
        {
          question: "Can I update or modify my product listings?",
          answer:
            "Yes, you can edit product details, prices, and inventory at any time through the vendor dashboard.",
        },
        {
          question: "How is product authenticity verified?",
          answer:
            "Vendors must provide proof of authenticity, such as Geographical Indication (GI) tags or certifications. Regular quality checks are conducted.",
        },
      ],
    },
    {
      title: "Payments and Fees",
      questions: [
        {
          question: "How are payments processed?",
          answer:
            "Payments are processed securely through the platform and deposited into your registered bank account. Payment cycles are weekly or bi-weekly, depending on your preference.",
        },
        {
          question: "What fees are associated with selling on the platform?",
          answer:
            "Once the early adopters' quota is filled, vendors can choose from the available subscription plans detailed above.",
        },
        {
          question: "Are there additional fees for optional services?",
          answer:
            "Optional services, like featured product listings, premium marketing support, and logistics solutions, are available for an additional fee if required.",
        },
        {
          question: "How do I track my earnings?",
          answer:
            "Vendors can monitor their earnings, pending payments, and transaction history through the analytics section of the dashboard.",
        },
      ],
    },
    {
      title: "Training and Support",
      questions: [
        {
          question: "Does the platform offer training for vendors?",
          answer:
            "Yes, training programs and workshops are available to help vendors align with global market standards and improve their skills.",
        },
        {
          question: "How do I access vendor support?",
          answer:
            "Vendor support is available via email, live chat, or through the help center on the platform.",
        },
        {
          question: "Can I request additional marketing support?",
          answer:
            "Yes, vendors can opt for additional marketing services, such as featured product listings or promotional campaigns, at an extra cost.",
        },
        {
          question: "Are there networking opportunities for vendors?",
          answer:
            "The platform provides opportunities to connect with other vendors and industry experts through events and online forums.",
        },
      ],
    },
    {
      title: "Policies and Compliance",
      questions: [
        {
          question: "What happens if I don’t comply with platform policies?",
          answer:
            "Non-compliance may result in penalties, suspension, or termination of your vendor account. Regular audits ensure adherence to policies.",
        },
        {
          question: "Do I need to maintain a minimum inventory level?",
          answer:
            "Vendors are expected to maintain sufficient inventory to meet demand and fulfill orders promptly.",
        },
        {
          question: "How are disputes or returns handled?",
          answer:
            "The platform manages customer disputes and returns through a standardized policy. Vendors are notified and involved in the resolution process.",
        },
        {
          question: "Can I sell products outside the platform?",
          answer:
            "Yes, vendors can sell products through other channels. However, exclusive collaborations or agreements may have specific conditions.",
        },
        {
          question: "Can I be blacklisted from the platform?",
          answer:
            "Yes, vendors can be blacklisted for non-compliance with platform policies. De Koshur Crafts B2B Connect is in partnership with Craftlore, the world’s largest open repository of Kashmiri crafts.",
        },
      ],
    },
  ];

  const highlightedTexts = [
    "No",
    "None",
    "High",
    "Highly",
    "Advanced",
    "No Service",
  ];
  const GreenHighlightedTexts = [
    "Free/Early",

    "Flat 1.5%",

    "None",
    "Free",

    "Subsidized",
    "Platform-Assisted",
    "Standard",

    "Available",
  ];
  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="DKC e-commerce platform Partnership Overview"
        mainHeading="Empowering Kashmir Handicraft Vendors for "
        mainHeadingHighlight="US Digital Market."
        description="Transform your business with De Koshur Crafts’ E-Commerce Partnership program, designed to integrate Kashmiri artisans and businesses into a powerful digital ecosystem. With advanced tools, streamlined operations, and global outreach, we bridge the gap between traditional craftsmanship and modern consumer expectations."
        iconImage={aboutIcon}
        iconTitle="Cloud-Based Digital Handicraft Ecosystem"
        textDetails="A platform that ensures immutable provenance, integrates digital GI tags, provides counterfeit protection, enables luxury product positioning, incorporates cultural storytelling, facilitates real-time inventory management, and offers dynamic price valuation for every product."
        buttonText="The World’s Largest E-Commerce Platform for Kashmir Crafts"
        buttonSubText="ELEVATING KASHMIRI HANDICRAFTS IN THE US RETAIL SECTOR"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Innovative Technology Solutions Tailored to your Client "
        color_title="Needs"
        subtitle="TECHNOLOGY ADVANCEMENTS IN THE PLATFORM"
        description="Our platform integrates cutting-edge advancements to deliver exceptional value and enhance client experiences. Explore how we bring innovation to every interaction."
        items={[
          "Dynamic Creative Optimization (DCO)",
          "Augmented Reality (AR)",
          "Fully Immersive VR Showrooms",
          "Haptic Feedback Technology",
          "Predictive Logistics",
          "Geo-Fencing in Marketing",
          "Automated Product Packaging Studios",
          "Omnichannel AI-Driven Customer Support",
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare To Other Platforms"
        sectionSubtitle="De Koshur Crafts USA ECOMMERCE Platform"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts E-Commerce Platform Eligibility "
        mainTitleHighlight="Criteria"
        faqAreaTitle="Check Your Vendor"
        faqAreaTitleHighlight="Eligibility."
        imageSrc={elib}
      />
      <CompareToOther
        sectionTitle="Compare Cost Affordability"
        sectionSubtitle="De Koshur Crafts USA Ecommerce Platform"
        platformData={costplatformData}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <CounterArea countersData={countersData} heading={Counterheading} />;
      <PricingService servicesData={PricingServicesData} />
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
        mainTitle="Frequently Asked Questions
(FAQs) for "
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

export default EcommercePage;
