import React from "react";
import HeroSection from "../../components/OurPartnerShip/HeroSection";
import heroImage from "../../assets/images/PARTNERSHIP/4.png";
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

const ConsignmentPage = () => {
  const heroSectionData = {
    heading1: "DKC CONSIGNMENT VENDOR PARTNERSHIP",
    heading2: "Strengthening Kashmiri Artisans, Entrepreneurs, ",
    heading3: "and Small Businesses",
    description: "Fostering Innovation, Opportunity, and Cultural Revival",
    buttonText: "DEDICATED TO KASHMIR'S HANDICRAFT SECTOR",
    buttonLink: "#",
    heroImage: heroImage,
    heroShapeImage: heroShape,
  };

  const caseStudyContent = {
    title: "Key features of Consignment Platform",
    subtitle:
      "Platform Designed in USA  – Tailored to Elevate Kashmiri Artisans in ",
    colortitle: "Global Retail Markets",
    categories: [
      { key: "all", label: "All" },
      { key: "Placement", label: "Placement" },
      { key: "Ownership", label: "Ownership" },
      { key: "Authentication", label: "Authentication" },
      { key: "Tracking", label: "Tracking" },
      { key: "Revenue", label: "Revenue" },
      { key: "Inventory", label: "Inventory" },
      { key: "Sustainability", label: "Sustainability" },
      { key: "Support", label: "Support" },
    ],
    caseStudyData: [
      {
        category: "Placement",
        title: "Exclusive Retail Placement",
        features: [
          "Showcase products in premium outlets",
          "Maximize visibility with curated spaces",
          "Align with luxury craft markets",
          "Access festive and seasonal promotions",
          "Highlight products through custom displays",
          "Leverage retail-specific branding opportunities",
          "Engage consumers with targeted placements",
          "Expand reach with global partnerships",
          "Ensure consistent exposure through rotations",
          "Strategically position products for visibility",
          "Collaborate on exclusive promotional events",
          "Increase sales with optimized placement",
        ],
      },
      {
        category: "Ownership",
        title: "Ownership Retention",
        features: [
          "Retain full ownership during consignment",
          "Control pricing to meet performance goals",
          "Reclaim unsold inventory for reallocation",
          "Withdraw products under agreed terms",
          "Flexibly supply multiple retail outlets",
          "Protect designs with intellectual property rights",
          "Negotiate exclusive deals for top sellers",
          "Rebrand products post-consignment if needed",
          "Ensure rights through legal agreements",
          "Transparent policies for product reconciliation",
          "Safeguard artisan interests through contracts",
          "Maintain financial control over products",
        ],
      },
      {
        category: "Authentication",
        title: "GI-Certified Product Authentication",
        features: [
          "Secure products with GI certifications",
          "Boost credibility in global markets",
          "Display authenticity prominently on packaging",
          "Use blockchain to verify certifications efficiently",
          "Protect against counterfeiting with certifications",
          "Offer certification workshops for artisans regularly",
          "Gain edge with government standards compliance",
          "Automatically verify certification for all products",
          "Strengthen buyer trust with authenticated items",
          "Promote certified products in marketing campaigns",
          "Support artisans acquiring required certifications",
          "Increase value for GI-certified handicrafts",
        ],
      },
      {
        category: "Tracking",
        title: "Sales Tracking Solutions",
        features: [
          "Monitor sales through advanced dashboards",
          "Track inventory with real-time updates",
          "Forecast demand using predictive analytics",
          "Access mobile-friendly sales tracking tools",
          "Analyze trends with detailed reports",
          "Compare performance across retail locations",
          "Automate payouts for seamless transactions",
          "Break down sales with SKU reports",
          "Secure cloud storage for sales data",
          "Customize reports to fit vendor needs",
          "Integrate with third-party inventory systems",
          "Gain insights for improved decision-making",
        ],
      },
      {
        category: "Revenue",
        title: "Revenue Sharing Benefits",
        features: [
          "Pre-agreed commissions ensure fair earnings",
          "Flexible contracts for vendor partnerships",
          "Timely payouts for completed transactions",
          "Incentives for high-performing vendor sales",
          "Transparent deductions for promotional costs",
          "Advance payment options for top sellers",
          "Dispute resolution ensures transparent practices",
          "Reduced commission for sustainable products",
          "Flexible terms for revenue-sharing agreements",
          "Transparent reports for clear earnings insights",
          "Incentives for meeting sustainability targets",
          "Fair practices protect artisan earnings",
        ],
      },
      {
        category: "Inventory",
        title: "Inventory Management Systems",
        features: [
          "Centralized systems for inventory tracking",
          "Automate reminders for stock audits",
          "Flexible restocking schedules for vendors",
          "Barcode-enabled systems reduce inventory errors",
          "Real-time updates on stock availability",
          "Reconcile damaged inventory efficiently",
          "Comprehensive inventory movement reports provided",
          "Return unsold inventory securely to vendors",
          "AI-driven forecasts for demand planning",
          "Integrate logistics for seamless replenishment",
          "Simplify assessments across multiple locations",
          "Streamline reconciliation processes for efficiency",
        ],
      },
      {
        category: "Sustainability",
        title: "Sustainability in Focus",
        features: [
          "Promote eco-friendly production practices",
          "Incentivize biodegradable packaging adoption",
          "Assist sourcing sustainable raw materials",
          "Host workshops on sustainable innovations",
          "Collaborate with NGOs for green campaigns",
          "Educate consumers on eco-friendly products",
          "Prioritize placement for sustainable items",
          "Reward vendors meeting sustainability targets",
          "Showcase products in green campaigns",
          "Promote ethical labor and fair practices",
          "Advance eco-conscious initiatives in markets",
          "Drive sustainability compliance across sectors",
        ],
      },
      {
        category: "Support",
        title: "Vendor Support Services",
        features: [
          "Tailored onboarding for new vendors",
          "Provide training on consignment processes",
          "Assist with retail compliance requirements",
          "Marketing tools enhance vendor visibility",
          "Helpdesk support for troubleshooting issues",
          "Webinars on trends and strategies offered",
          "Personalized performance improvement plans provided",
          "Collaboration opportunities with other vendors",
          "Educational resources for branding guidance",
          "Facilitate operations with dedicated assistance",
          "Continuous vendor support throughout partnerships",
          "Build partnerships for long-term success",
        ],
      },
    ],
  };

  const tableData = {
    heading: "Platform Parameters", // The heading
    list: [
      "Tailored Consignment Strategies",
      "Consignment Inventory Automation",
      "Real-Time Sales Analytics",
      "Blockchain-Based Product Verification",
      "Cultural Storytelling for Displays",
      "Customized Retail Placement",
      "Eco-Friendly Retail Solutions",
      "Fair Trade and Transparent Payments",
      "Sustainable Packaging Support",
      "Vendor Support and Training",
      "Revenue Reconciliation Transparency",
      "B2B Retail Networking Opportunities",
      "Localized Marketing Support",
      "Pricing Transparency for Vendors",
      "Sustainability Scorecard Integration",
      "Seasonal and Festival Promotions",
      "Customized Product Displays",
      "Artisan Empowerment Programs",
      "Exclusive Retail Event Participation",
      "Virtual Consignment Management Tools",
    ],
  };
  const costtableData = {
    heading: "Platform Parameters", // The heading
    list: [
      "Consignment Setup Fee",
      "Monthly Participation Fee",
      "Commission on Sales",
      "Inventory Management Fee",
      "Restocking Fees",
      "Storage Fees",
      "Return Handling Fee",
      "Marketing & Promotion Fee",
      "Consignment Processing Fee",
      "Shipping Logistics Assistance",
      "Sales Reporting & Analytics Fee",
      "Fair Trade Certification Fee",
      "Sustainability Compliance Fee",
      "B2B Networking Fee",
      "Retail Placement Optimization",
      "Custom Product Display Support",
      "Contract Negotiation Assistance",
      "Blockchain Traceability Service",
      "Vendor Training & Workshops",
    ],
  };
  const platformData = [
    {
      platform: "DKC",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "Tailored for Kashmiri crafts",
        "Yes with advanced systems",
        "Yes",
        "Yes",
        "Yes",
        "Tailored for artisan products",
        "Yes",
        "Yes",
        "Yes",
        "Comprehensive",
        "Yes",
        "Yes",
        "Tailored to Kashmiri crafts",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    {
      platform: "ArtFire",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "Generic",
        "Vendor Managed",
        "Limited",
        "No",
        "No",
        "Generic",
        "No",
        "Limited",
        "No",
        "Limited",
        "Limited",
        "Limited",
        "No",
        "Limited",
        "No",
        "No",
        "Generic",
        "No",
        "No",
        "No",
      ],
    },
    {
      platform: "Artisan Exchange",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "Limited",
        "None",
        "Minimal",
        "No",
        "Limited",
        "Limited",
        "No",
        "No",
        "No",
        "Minimal",
        "No",
        "Minimal",
        "Minimal",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Limited",
        "No",
      ],
    },
  ];
  const costplatformData = [
    {
      platform: "DKC",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "$200.00",
        "$20",
        "70/30 (Consignee/Consignor)",
        "Free",
        "None",
        "Free (Platform-Included)",
        "Free",
        "Free",
        "Free",
        "Platform-Assisted",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
        "Free",
      ],
    },
    {
      platform: "Home Good Inc.",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "$350",
        "$200",
        "50/50 (Consignee/Consignor)",
        "$20 per Month",
        "$3 per item",
        "$10 per Month",
        "Vendor Responsibility",
        "$50 per Month",
        "$50 per shipment",
        "Vendor Responsibility",
        "$2",
        "No Service",
        "$2",
        "$3",
        "$2",
        "$3",
        "Limited",
        "No Service",
        "Limited",
      ],
    },
    {
      platform: "Newton Buying Corp.",
      heading: "Platform Cost", // Dynamic Heading
      rows: [
        "$500",
        "$175",
        "60/40 (Consignee/Consignor)",
        "$30 per Month",
        "Negotiable",
        "$15 per Month",
        "Vendor Responsibility",
        "$55 per Month",
        "Negotiable",
        "Vendor Responsibility",
        "$2",
        "No Service",
        "$5",
        "$2",
        "$5",
        "$3",
        "Limited",
        "No Service",
        "$50",
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
        subHeading="DKC CONSIGNMENT PARTNERSHIP INITIATIVE"
        mainHeading="Redefining Retail Opportunities for Kashmiri "
        mainHeadingHighlight="Artisans and Businesses"
        description="Transform your business with De Koshur Crafts’ Consignment Partnership program, designed to integrate Kashmiri artisans and businesses into a powerful digital ecosystem."
        iconImage={aboutIcon}
        iconTitle="Smart Retail Solutions for Small Craft Excellence"
        textDetails="Leverage cutting-edge tools that optimize inventory management, authenticate products with GI certification, and enhance customer engagement through powerful cultural narratives. This system simplifies retail operations, supports transparent sales tracking, and provides actionable insights for business growth."
        buttonText="World’s First Consignment Platform for Kashmir Crafts"
        buttonSubText="Plugging Gaps in the Kashmir Handicraft Sector"
        buttonLink="#"
      />
      <CaseStudyArea {...caseStudyContent} />
      <AboutSection
        title="Innovative Tools for Modern Consignment "
        color_title="Operations"
        subtitle="TECHNOLOGY ADVANCEMENTS IN DKC CONSIGNMENT PARTNERSHIP"
        description="Our platform combines advanced technologies to streamline consignment processes, boost vendor efficiency, and enhance retail performance. Explore solutions built for consignment success."
        items={[
          "Optimized Consignment Inventory Management",
          "Augmented Reality (AR) Product Showcasing",
          "Virtual Retail Space Planning",
          "Haptic Feedback for Stock Accuracy",
          "AI-Powered Demand Prediction Tools",
          "Geo-Fencing for Market Targeting",
          "Automated Consignment Reconciliation Tools",
          "Blockchain-Based Product Verification",
          "Omnichannel Vendor Support Systems",
          "Sustainable Packaging Innovations",
          "Empowering Consignment Growth with Future-Ready Technology",
        ]}
        image={aboutImage}
      />
      <CompareToOther
        sectionTitle="Compare to Other Consignment Vendor Platforms"
        sectionSubtitle="De Koshur Crafts Consignment Vendor Partnership"
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
        sectionSubtitle="De Koshur Crafts USA Consignment Vendor Partnership Platform"
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

export default ConsignmentPage;
