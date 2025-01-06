import React from "react";
import HeroSection from "../../components/OurPartnerShip/HeroSection";
import heroImage from "../../assets/images/PARTNERSHIP/5.png";
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

import FooterUpperwithoutLink from "../../components/Shared-Components/FooterUpperWithoutLink";
import faqImage from "../../assets/images/faq-big.png"; // Importing images
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

const ExhibitionPage = () => {
  const heroSectionData = {
    heading1: "De Koshur Crafts Import Export Vendor Partnership",
    heading2: "Driving Growth for Kashmir's Artisans,",
    heading3: "Businesses, and Startups",
    description:
      "Empowering Kashmir’s Craft Sector: Advancing Heritage, Innovation, and Global Opportunities",
    buttonText: "KASHMIR HANDICRAFT SECTOR EXCLUSIVELY",
    buttonLink: "#",
    heroImage: heroImage,
    heroShapeImage: heroShape,
  };

  const caseStudyContent = {
    title: "Key features of our Import Export Vendor Partnership Platform",
    subtitle:
      "Business Model– Tailored to Empower Kashmiri Artisans for Success in ",
    colortitle: "US Import Markets",
    categories: [
      { key: "all", label: "All" },
      { key: "Advanced Export Architecture", label: "Export Architecture" },
      { key: "Seamless API Integrations", label: "API Integrations" },
      {
        key: "Product Authenticity and Compliance",
        label: "Product Authenticity",
      },
      { key: "Export-Driven Marketing Features", label: "Marketing Features" },
      {
        key: "International Logistics and Supply Chain",
        label: "Logistics & Supply Chain",
      },
      { key: "Content Management for Outreach", label: "Outreach" },
      { key: "Financing and Vendor Support", label: "Financing Support" },
      { key: "Buyer Engagement Tools", label: "Buyer Engagement" },
    ],
    caseStudyData: [
      {
        category: "Advanced Export Architecture",
        title: "Advanced Export Architecture",
        features: [
          "Scalable export architecture framework.",
          "Modular microservices for seamless integration.",
          "Cloud-native infrastructure for reliable performance.",
          "AI-powered personalization for targeted engagement.",
          "Real-time analytics for export monitoring.",
          "Multi-layered security-first platform design.",
          "Progressive Web Application (PWA) support.",
          "Headless commerce for multichannel adaptability.",
          "Custom dashboards for vendor insights.",
          "Event-driven architecture for responsiveness.",
          "Optimized database management for scalability.",
          "Real-time issue monitoring and notifications.",
        ],
      },
      {
        category: "Seamless API Integrations",
        title: "Seamless API Integrations",
        features: [
          "Shipping APIs for US logistics.",
          "Payment gateway APIs for secure transactions.",
          "Marketing automation APIs for campaigns.",
          "Social media APIs for market outreach.",
          "Loyalty APIs for customer retention.",
          "Customer analytics APIs for performance insights.",
          "Customs documentation APIs for compliance.",
          "Multi-region tax compliance integrations.",
          "Product labeling compliance integrations.",
          "Return management APIs for reverse logistics.",
          "Chatbot APIs for real-time customer support.",
          "Multi-language APIs for broader audience engagement.",
        ],
      },
      {
        category: "Product Authenticity and Compliance",
        title: "Product Authenticity and Compliance",
        features: [
          "GI certification for authenticity verification.",
          "Anti-counterfeiting measures for trade protection.",
          "Packaging compliance for US market standards.",
          "Legal documentation for smooth customs clearance.",
          "Labeling compliance for regional regulations.",
          "Blockchain-powered authenticity tracking systems.",
          "Global compliance audits for export readiness.",
          "Export licensing and certification assistance.",
          "Heritage storytelling for cultural marketing.",
          "Customs-specific documentation for seamless exports.",
          "Vendor support for regional permits.",
          "Counterfeit product monitoring and prevention.",
        ],
      },
      {
        category: "Export-Driven Marketing Features",
        title: "Export-Driven Marketing Features",
        features: [
          "AI-powered marketing tools for targeting.",
          "Geo-specific digital advertising for outreach.",
          "Predictive analytics for demand forecasting.",
          "Multi-channel automation for scalable campaigns.",
          "Demographic segmentation for audience insights.",
          "Personalized content delivery for engagement.",
          "Campaign performance tracking for improvement.",
          "Cultural storytelling for US market adaptation.",
          "Export-specific loyalty and rewards programs.",
          "Digital assets for impactful branding.",
          "Custom digital catalogs for promotions.",
          "Influencer collaborations for greater visibility.",
        ],
      },
      {
        category: "International Logistics and Supply Chain",
        title: "International Logistics and Supply Chain",
        features: [
          "Freight forwarding for seamless transportation.",
          "Warehousing solutions in major US cities.",
          "Flexible shipping options for buyer preferences.",
          "Real-time shipment tracking for transparency.",
          "Secure insurance for international consignments.",
          "Customs brokerage for hassle-free clearances.",
          "Automated inventory tracking for export readiness.",
          "Reverse logistics for global returns management.",
          "Optimized packaging for US compliance standards.",
          "Partnerships with top logistics providers.",
          "AI-powered route optimization for cost efficiency.",
          "Multi-region fulfillment centers for faster delivery.",
        ],
      },
      {
        category: "Content Management for Outreach",
        title: "Content Management for Outreach",
        features: [
          "Multilingual content for diverse US audiences.",
          "SEO-optimized content for US import markets.",
          "Advanced modeling for cultural storytelling.",
          "Real-time analytics for engagement monitoring.",
          "Personalized delivery for better conversions.",
          "Automated workflows for content updates.",
          "Omni-channel distribution for consistent branding.",
          "Metadata tagging for enhanced discoverability.",
          "Interactive storytelling for immersive branding.",
          "A/B testing for strategy refinement.",
          "Centralized digital repository for global campaigns.",
          "Translation services for market relevance.",
        ],
      },
      {
        category: "Financing and Vendor Support",
        title: "Financing and Vendor Support",
        features: [
          "Export-specific financing solutions for scaling.",
          "Deferred payment plans for US buyers.",
          "BNPL and installment plans for accessibility.",
          "Seasonal financing offers for export peaks.",
          "Vendor loans for capacity building growth.",
          "Flexible payment options for global transactions.",
          "Reward-linked financing for buyer incentives.",
          "Pre-approved credit options for trusted vendors.",
          "Export insurance for financial security.",
          "Financial consultations for export expansions.",
          "Lease-to-own models for high-value operations.",
          "Cross-border transaction support for vendors.",
        ],
      },
      {
        category: "Buyer Engagement Tools",
        title: "Buyer Engagement Tools",
        features: [
          "Interactive catalogs for immersive shopping.",
          "Virtual try-ons for personalized experiences.",
          "Live product demos for real-time engagement.",
          "3D product configurators for customization.",
          "Augmented reality (AR) for product visualization.",
          "Gamified buying for increased buyer interaction.",
          "Customer reviews integration for credibility.",
          "Personalized recommendations for better conversions.",
          "Infographics showcasing unique craftsmanship stories.",
          "User-generated content for authenticity.",
          "Video tours highlighting Kashmiri craftsmanship.",
          "AI-powered support for real-time assistance.",
        ],
      },
    ],
  };

  const tableData = {
    heading: "Platform Parameters", // The heading
    list: [
      "Tailored Exhibition Strategies",
      "Booth Space Optimization",
      "Exhibitor Setup Assistance",
      "Digital Exhibition Integration",
      "Cultural Storytelling Displays",
      "Audience Targeting Solutions",
      "Eco-Friendly Booth Options",
      "Fair Trade Product Showcasing",
      "Marketing & Promotions Support",
      "B2B Networking Events",
      "Revenue Transparency for Vendors",
      "Sustainability Compliance Tools",
      "Seasonal Exhibit Opportunities",
      "Custom Booth Branding Support",
      "Training for Exhibitors",
      "Blockchain-Based Product Verification",
      "Virtual Exhibition Access",
      "Artisan Empowerment Programs",
      "Exclusive Event Invitations",
      "Post-Exhibition Analytics",
    ],
  };

  const costtableData = {
    heading: "Platform Parameters", // The heading
    list: [
      "Exhibition Booth Setup Fee",
      "Participation Fee (Per Event)",
      "Commission on Sales",
      "Display Optimization Fee",
      "Booth Branding Assistance",
      "Logistics and Booth Transport Fee",
      "Sustainability Compliance Support",
      "Marketing & Promotion Fee",
      "Cultural Storytelling Integration",
      "Fair Trade Certification Fee",
      "Sales Reporting & Analytics Fee",
      "Networking Event Fee",
      "Seasonal Campaign Participation",
      "Customized Booth Design Support",
      "Product Traceability and GI Tagging",
      "Vendor Training & Workshops",
      "Exclusive Exhibitor Access",
      "Revenue Transparency Tools",
      "Post-Exhibition Growth Support",
      "Booth Dismantling Fee",
      "Post-Exhibition Storage Charges",
      "Event or Exhibition Visa Invitations",
    ],
  };

  const platformData = [
    {
      platform: "De Koshur Crafts",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "Customized for Kashmiri crafts",
        "Yes with personalized layouts",
        "Yes with full support",
        "Yes",
        "Yes",
        "Tailored for niche markets",
        "Yes",
        "Yes",
        "Yes with event-specific campaigns",
        "Included",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Comprehensive",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    {
      platform: "Home Goods Inc.",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "Generic",
        "Standard",
        "Vendor Responsibility",
        "Limited",
        "No",
        "Generic",
        "No",
        "Limited",
        "Limited",
        "Limited",
        "Limited",
        "No",
        "No",
        "Paid",
        "Limited",
        "No",
        "No",
        "No",
        "No",
        "Limited",
      ],
    },
    {
      platform: "Newton Buying Corp.",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "Limited",
        "Minimal",
        "None",
        "No",
        "Limited",
        "Limited",
        "No",
        "No",
        "No",
        "Minimal",
        "No",
        "No",
        "No",
        "Minimal",
        "No",
        "No",
        "No",
        "No",
        "Minimal",
        "No",
      ],
    },
  ];
  const costplatformData = [
    {
      platform: "De Koshur Crafts",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "$500",
        "$300",
        "5% (flat)",
        "Free",
        "Included",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
        "Included",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
        "Comprehensive",
        "$50",
        "$250 per Month",
        "$150 per invitation letter *",
      ],
    },
    {
      platform: "Home Goods Inc.",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "$800",
        "$300",
        "10%-15%",
        "$30",
        "Vendor Responsibility",
        "$50",
        "No Service",
        "$100 per event",
        "No Service",
        "No Service",
        "$20",
        "$10",
        "Limited",
        "$50",
        "No Service",
        "Limited",
        "Limited",
        "$5",
        "Minimal",
        "$100",
        "$350",
        "No Service",
      ],
    },
    {
      platform: "Newton Buying Corp.",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "$850",
        "$400",
        "12%-18%",
        "$50",
        "Limited",
        "$50",
        "No Service",
        "$150",
        "Limited",
        "No Service",
        "$20",
        "$10",
        "No Service",
        "Limited",
        "No Service",
        "No Service",
        "No Service",
        "No Service",
        "No Support",
        "$150",
        "$350",
        "No Service",
      ],
    },
  ];

  const faqAreaItems = [
    {
      title: "Business Registration",
      content: `Vendors must provide proof of a valid business license or registration.`,
    },
    {
      title: "GI Certification",
      content: `Only vendors offering GI-certified Kashmiri products are eligible for the platform.`,
    },
    {
      title: "Product Authenticity",
      content: `Ensure all products meet authenticity standards with proper verification.`,
    },
    {
      title: "Sustainability Practices",
      content: `Commitment to eco-friendly materials and ethical production processes.`,
    },
    {
      title: "Export-Ready Packaging",
      content: `Packaging must comply with U.S. market regulations, including labeling`,
    },
    {
      title: "Logistical Readiness",
      content: `Vendors must demonstrate capabilities for timely inventory availability and shipping.`,
    },
    {
      title: "Financial Stability",
      content: `Vendors should showcase financial reliability to support export operations.`,
    },
    {
      title: "Cultural Storytelling Alignment",
      content: `Products and brands must support the narrative of Kashmiri heritage and craftsmanship.`,
    },
    {
      title: "Training Program Participation",
      content: `Vendors are required to complete training programs for export standards.`,
    },
    {
      title: "Compliance with Platform Policies",
      content: `Adherence to De Koshur Crafts' ethical trade, transparency, and operational policies.`,
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
      title: "Certified Authenticity",
      description:
        "Geographical Indication (GI) tags ensure verified product origin.",
      image: service1,
      category: "Buyers",
    },
    {
      title: "Streamlined Sourcing",
      description:
        "Advanced tools simplify finding export-ready Kashmiri products.",
      image: service2,
      category: "Buyers",
    },
    {
      title: "Origin Traceability",
      description:
        "Blockchain provides transparency and guarantees product authenticity.",
      image: service3,
      category: "Buyers",
    },
    {
      title: "Sustainable Choices",
      description:
        "Eco-friendly options meet global environmental compliance standards.",
      image: service4,
      category: "Buyers",
    },
    {
      title: "Global Access",
      description:
        "Seamlessly showcase products to international buyers in demand markets.",
      image: service4,
      category: "Vendors",
    },
    {
      title: "Export Branding",
      description:
        "Vendor pages enhance visibility with tailored storytelling and marketing.",
      image: service4,
      category: "Vendors",
    },
    {
      title: "Supply Optimization",
      description:
        "Inventory, logistics, and packaging tools streamline export operations.",
      image: service4,
      category: "Vendors",
    },
    {
      title: "Capability Growth",
      description:
        "Training programs align artisan expertise with global trade standards.",
      image: service4,
      category: "Vendors",
    },
    {
      title: "Eco Leadership",
      description:
        "Encourages sustainable production, reducing carbon footprints in exports.",
      image: service4,
      category: "Industry",
    },
    {
      title: "Quality Control",
      description:
        "Guarantees export-grade craftsmanship compliant with international regulations.",
      image: service4,
      category: "Industry",
    },
    {
      title: "Global Network",
      description:
        "Builds an ecosystem connecting exporters, artisans, and global buyers.",
      image: service4,
      category: "Industry",
    },
    {
      title: "Heritage Export",
      description:
        "Promotes cultural storytelling, positioning Kashmiri crafts in global markets.",
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
    { target: 20, range: "(1-5)", planName: "Starter Plan" },
    { target: 99, range: "(5-10)", planName: "Basic Plan" },
    { target: 150, range: "(10-15)", planName: "Growth Plan" },
    { target: 499, range: "(15+)", planName: "Premium Plan" },
    // { target: 1499, range: "(86-100)", planName: "Elite Plan" },
    // { target: 1999, range: "(100+)", planName: "Platinum Plan" },
  ];

  const Counterheading =
    "Early Adopter Monthly De Koshur Crafts-USA Import Export Platform Fees (2025-26).";
  const HowItworksphases = [
    "Registration Phase",
    "Document Submission Phase",
    "Eligibility Review Phase",
    "Agreement and Certification Phase",
    "Profile Setup Phase Installation",
    "Customs & Clearance Assistance",
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
          question: "How do I become a vendor in the store?",
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
          question: "Can I update or modify my product displays after setup?",
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
          question: "How are payments processed for in-store sales?",
          answer:
            "Payments are processed weekly, with detailed sales reports provided to vendors through our vendor portal.",
        },
        {
          question: "What fees are associated with the vendor partnership?",
          answer:
            "Fees include the annual space rental based on your tier. Additional charges may apply for premium marketing or prime store locations.",
        },
        {
          question:
            "Are there additional charges for premium services (e.g., prime locations)?",
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

  //   return

  const highlightedTexts = ["No", "None"];
  const GreenHighlightedTexts = ["Yes", "yess"];

  return (
    <>
      <HeroSection {...heroSectionData} />
      <AboutArea
        thumbImage={aboutThumb}
        shapeImage={aboutShape}
        thumbTitle="Partnership Designed For You"
        subHeading="De Koshur Crafts Import Export Vendor Partnership Overview"
        mainHeading="Empowering Kashmiri Handicraft "
        mainHeadingHighlight="Vendors for the US Market."
        description="Expand your global reach with the De Koshur Crafts Import Export Partnership program, specifically designed to integrate Kashmiri artisans and businesses into the thriving US market. With tailored strategies, robust trade support, and advanced logistical solutions, we connect the unmatched heritage of Kashmiri craftsmanship with the growing demand in the United States."
        iconImage={aboutIcon}
        iconTitle="Global Trade Ecosystem for Kashmiri Handicrafts"
        textDetails="A specialized platform enabling the global export of Kashmiri handicrafts through GI certification, anti-counterfeit measures, luxury market positioning, cultural storytelling, efficient logistics, and compliance with US import regulations for packaging, labeling, and sustainability."
        buttonText="The Largest Import Export Platform for Kashmiri Handicrafts"
        buttonSubText="Plugging Gaps in the Kashmir Handicraft Sector"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Innovative Technology Solutions Tailored to Export "
        color_title="Needs"
        subtitle="Technology Advancements in the Partnership"
        description="At De Koshur Crafts, we empower export-focused businesses with advanced technology to elevate Kashmiri handicrafts in the global market. Our platform is designed to streamline operations, enhance buyer engagement, and ensure exceptional delivery experiences."
        items={[
          "Dynamic Trade Optimization (DTO)",
          "Smart Market Insights & Trade Analytics",
          "Predictive Supply Chain Analytics",
          "Adaptive Export Packaging & Labeling Solutions",
          "Customs Documentation Automation",
          "AI-Driven Freight Management",
          "Blockchain-Based Trade Verification",
          "Virtual Export Hubs",
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare to Other Exhibition Vendor Platforms"
        sectionSubtitle="De Koshur Crafts USA Exhibition Platform"
        platformData={platformData}
        tableData={tableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <ServiceArea servicesData={servicesData} />
      <FaqArea
        faqItems={faqAreaItems}
        sectionTitle="Eligibility Criteria"
        mainTitle="De Koshur Crafts Import Export Platform Eligibility"
        mainTitleHighlight="Criteria"
        faqAreaTitle="Check Your Vendor"
        faqAreaTitleHighlight="Eligibility."
        imageSrc={elib}
      />
      <PricingService
        heading={PriceServiceheading} // Dynamic heading
        subheading={PriceServicesubheading} // Dynamic subheading
        servicesData={PriceServiceservicesData} // Dynamic service data
        buttonText={PriceServicebuttonText} // Dynamic button text
      />
      <CompareToOther
        sectionTitle="Compare Cost Affordability"
        sectionSubtitle="De Koshur Crafts USA Exhibition Platform"
        platformData={costplatformData}
        tableData={costtableData}
        highlightedTexts={highlightedTexts}
        GreenHighlightedTexts={GreenHighlightedTexts}
      />
      <CounterArea countersData={countersData} heading={Counterheading} />;
      <HowItWorks
        sectionSubtitle="How It Works"
        sectionTitle="Swift Partnership Activation"
        description="Unlock the potential of global trade with De Koshur Crafts' streamlined import-export vendor partnership process. From initial registration to market leadership, our efficient onboarding system provides you with all the tools, training, and ongoing support needed to thrive in international markets."
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
        content={VendorContentData} // An array of content objects
        partnershipTierText="Exclusive Partnership Tier" // This can be any dynamic text
      />
      <ContactUs
        title="Get In Touch with Us" // Directly passing the title
        subtitle="Have questions or want to start a partnership? We would love to hear from you!" // Directly passing the subtitle
        imageSrc="/assets/images/contact-image.png" // Path to the image
        placeholders={{
          name: "Full Name *",
          email: "Your Email Address *",
          subject: "Partnership Inquiry *",
          phone: "Phone Number *",
          message: "Your Message",
        }} // Passing the placeholders for the form fields
        buttonText="Send Message" // Passing the button text
      />
      <FooterArea />
    </>
  );
};

export default ExhibitionPage;
