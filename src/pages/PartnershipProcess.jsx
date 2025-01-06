import React from "react";

// Component Imports
import Breadcrumb from "../components/Shared-Components/Breadcrumb";
import VendorPartnership from "../components/OurPartnerShip/VendorManual";
import AboutSection from "../components/Shared-Components/AboutSection";
import CounterAreaManual from "../components/OurPartnerShip/CounterAreaManual";
import HowItWorks from "../components/OurPartnerShip/HowItWorks";
import PPTestimonial from "../components/Shared-Components/PPTestimonial";
import ServicesArea from "../components/index/ServicesArea";

// Assets Imports
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import aboutImage from "../assets/images/about-thu3.png";
import service_icon from "../assets/images/lstboc.png";
import aboutImg from "../assets/images/about_img_1.png";
import rightArrow from "../assets/images/right-arrow.png";
import icon22 from "../assets/icon/22.png";
import booking from "../assets/icon/booking.png";

export default function PartnershipProcess() {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Process Framework" },
  ];
  const VendorContentData = [
    {
      title: "E-commerce",
      description: "Vendor Partnership",
      heading1: "Minimum Rentention Period",
      desc1: "Minimum 18 Months",
      heading2: "Key Performance Indicator Score",
      desc2: "Maintain Minimum 7+",
      heading3: "Next Level of Partnership ",
      desc3: " Brick & Mortar",
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
  const countersData = [
    { target: 20, range: "(1-5)", planName: "Starter Plan" },
    { target: 99, range: "(5-10)", planName: "Basic Plan" },
    { target: 150, range: "(10-15)", planName: "Growth Plan" },
    { target: 499, range: "(15+)", planName: "Premium Plan" },
    // { target: 1499, range: "(86-100)", planName: "Elite Plan" },
    // { target: 1999, range: "(100+)", planName: "Platinum Plan" },
  ];
  const Counterheading = "Vendor Partnership Framework and Pathway";
  const ServicesAreaData = {
    title: "Services",
    subtitle: "Seamless Transitions with One Time Paid Multi-Path Eligibility",
    mainTitle:
      "Redefine Your Journey with KPI-Driven Excellence Without being Locked-In ",
    highlight: "Retention Periods.",
    services: [
      {
        title: "Starter Package",

        icon: service_icon,
        DesignFor: "Small vendors establishing presence in ecosystem.",
        access: "Basic partnerships such as Consignment and Exhibition.",
        compulsory: "E-Commerce Retention Period.",
        KPIscore: " Minimum 7 across performance metrics",
        fee: "$2,500",
      },
      {
        title: "Growth Package",

        icon: service_icon,
        DesignFor: "Scaling vendors transitioning to growth strategies.",
        access: "Mid-tier partnership such as Import Export.",
        compulsory: "E-Commerce Retention Period.",
        KPIscore: "Minimum 7 across performance metrics",
        fee: "$5,000",
      },
      {
        title: "Premium Package",

        icon: service_icon,
        DesignFor: "Established vendors aiming for global expansion.",
        access: "Full-spectrum partnership of Brick and Mortar",
        compulsory: "E-Commerce Retention Period.",
        KPIscore: "Minimum 7 across performance metrics",
        fee: "$10,000",
      },
    ],
  };
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
    readMoreText: "Register Now",
    readMoreLink: "/about",
    icon: icon22,
    arrowIcon: rightArrow,
  };
  return (
    <>
      <Breadcrumb title="Process Framework" links={breadcrumbLinks} />
      <AboutSection
        title="Vendor Partnership Process Overview"
        color_title=""
        subtitle="B2B Connect - USA"
        description="At De Koshur Crafts, our Vendor Partnership Process is designed to empower ambitious artisans and businesses to achieve their goals seamlessly. This process provides a clear pathway for growth while ensuring every vendor aligns with our core principles of quality, ethical standards, and excellence."
        items={[
          " <b>Empowering Growth:</b> Helping vendors start, scale, and expand globally.",
          "<b>Aligned Standards:</b> Ensuring quality, ethics, and operational excellence.",
          "<b>Access to Opportunities:</b> Unlocking partnerships, connections and networks.",
          "<b>Simplified Pathway:</b> Transparent process ensures seamless progression.",
        ]}
        image={aboutImage}
        extraText={{
          title: "Handicraft Progressive Business Model for Every Vision",
          description:
            "Crafting Kashmir's Next Generations Future Together | Amir-e-Kabir's Legacy, Reimagined for Today's World",
        }}
      />
      <CounterAreaManual heading={Counterheading} />
      <VendorPartnership />
      <AboutSection
        title="What happens if a vendor is not eligible for the next level of partnership?"
        color_title=""
        subtitle="B2B Connect - USA"
        description="At De Koshur Crafts, we believe in empowering ambitious vendors to achieve their goals without compromising the principles that define our platform. For experienced business houses, we offer a unique opportunity to bypass the retention period while maintaining an unwavering commitment to the highest KPI standards."
        items={[
          "<b>Accelerated Growth:</b> Bypass retention and advance your journey with ease.",
          "<b>Ethical Excellence:</b> Uphold KPI standards ensuring quality and lasting impact.",
          "<b>Global Opportunities:</b> Access partnerships, expand into key global markets.",
          "<b>Platform Integrity:</b> Join a network committed to ethical craftsmanship",
        ]}
        image={aboutImage}
        extraText={{
          title: "Handicraft Progressive Business Model for Every Vision",
          description:
            "Crafting Kashmir's Next Generations Future Together | Amir-e-Kabir's Legacy, Reimagined for Today's World",
        }}
      />
      <ServicesArea {...ServicesAreaData} />
      <CounterAreaManual
        heading="KPI Evaluation Metrics Framework For Vendors"
        para="How You Can Retain Progressive Partnerships Path?"
      />
      <PPTestimonial />
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
    </>
  );
}
