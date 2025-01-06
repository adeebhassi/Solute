import React from "react";

// Component Imports
import HeroSection from "../components/Shared-Components/HeroSection";
import FeatureArea from "../components/Shared-Components/FeatureArea";
import AboutSection from "../components/Shared-Components/AboutSection";
import CounterArea from "../components/Shared-Components/CountArea";
import CaseStudiesArea from "../components/Shared-Components/CaseStudyArea";
import VendorPartnership from "../components/Shared-Components/VenderPartnerShip";
import HowItWorks from "../components/OurPartnerShip/HowItWorks";
import FAQSection from "../components/index/FAQSection";
import TestimonialSection from "../components/index/TestimonialSection";
import ProgressSection from "../components/index/ProgressSection";
import SellerNetworkSection from "../components/index/ProgressSectionSeller";
import FlagSection from "../components/index/FlagSection";
import FooterUpper from "../components/OurPartnerShip/FooterUpper";
import CarouselSlider from "../components/Shared-Components/Slider";
import ServicesArea from "../components/index/ServicesArea";

// Assets Imports
import projectthu from "../assets/images/project-thu.png";
import service_icon from "../assets/images/home-two/service-icon2.png";
import aboutImg from "../assets/images/about_img_1.png";
import rightArrow from "../assets/images/right-arrow.png";
import icon22 from "../assets/icon/22.png";
import booking from "../assets/icon/booking.png";
import projectthu2 from "../assets/images/project-thu2.png";
import aboutImage from "../assets/images/about-thu3.png";
import ecommerceImage from "../assets/images/ecommercepage.png";

const Index = () => {
  const exampleData = {
    title: "Featured Craft Categories",
    subtitle: ["Technology's Evolution", "Towards Brilliance"],
    slides: [
      {
        image: projectthu,
        title: "PASHMINA",
        description: "WEAVING CRAFTS",
        link: "project-details.html",
      },
      {
        image: projectthu2,
        title: "KANI",
        description: "WEAVING CRAFTS",
        link: "project-details.html",
      },
      {
        image: projectthu,
        title: "CARPET",
        description: "WEAVING CRAFTS",
        link: "project-details.html",
      },
      {
        image: projectthu,
        title: "SILK",
        description: "WEAVING CRAFTS",
        link: "project-details.html",
      },
    ],
  };
  const ServicesAreaData = {
    title: "Services",
    subtitle:
      "Kashmir Handicrafts Bussiness Opportunities: Exclusively for the U.S. Market",
    mainTitle: "Why you need De Koshur Crafts ",
    highlight: "Partnerships ?",
    services: [
      {
        title: "US Handicraft Market Access",
        challenge:
          "Kashmiri artisans face limited international reach due to inadequate logistics, and visibility, restricting global exposure for their craftsmanship.",
        benefit:
          "De Koshur Crafts empowers global visibility through e-commerce, exhibitions, and retail spaces, connecting artisans to American audiences.",
        icon: service_icon,
      },
      {
        title: "Infrastructure Challenges Solved",
        challenge:
          "Small businesses struggle with shipping, warehousing, and customs navigation, lacking resources and expertise to efficiently access international markets.",
        benefit:
          "De Koshur Crafts manages logistics, warehousing, and compliance, ensuring artisans seamlessly reach global customers while focusing on their craft.",
        icon: service_icon,
      },
      {
        title: "Ethical Standards Simplified",
        challenge:
          "Small vendors struggle to meet global compliance standards like fair trade and sustainability due to limited resources, knowledge, and capacity.",
        benefit:
          "De Koshur Crafts ensures products align with global standards, enhancing credibility and trust through expert guidance and managed compliance.",
        icon: service_icon,
      },
      {
        title: "Financial Risks Minimized",
        challenge:
          "High upfront costs for international marketing, storefronts, and large-scale operations create significant financial risks for artisans with minimal margins.",
        benefit:
          "De Koshur Crafts’ flexible models, like consignment and exhibitions, minimize risk while maximizing global exposure and opportunities.",
        icon: service_icon,
      },
      {
        title: "Branding and Marketing",
        challenge:
          "Small-scale vendors struggle to establish brand recognition and execute impactful marketing campaigns in foreign markets due to limited expertise and resources.",
        benefit:
          "De Koshur Crafts provides vendors access to an established brand, professional marketing platforms, and event promotions, ensuring visibility and trust.",
        icon: service_icon,
      },
      {
        title: "Quality Improvement Resources",
        challenge:
          "Small-scale artisans face difficulties meeting global quality standards, eco-friendly packaging requirements, and professional presentation due to resource constraints.",
        benefit:
          "De Koshur Crafts offers quality tools, expert photography, and eco-friendly packaging, empowering artisans to compete on a global scale.",
        icon: service_icon,
      },
      {
        title: "Industry Network Access",
        challenge:
          "Artisans struggle to access essential industry networks, limiting opportunities to connect with distributors, attend exhibitions, or reach high-value international buyers.",
        benefit:
          "De Koshur Crafts connects vendors to trade shows, exhibitions, and wholesale markets, unlocking access to critical industry contacts and opportunities.",
        icon: service_icon,
      },
      {
        title: "Sustainable Business Models",
        challenge:
          "Kashmiri artisans face unstable revenue due to seasonal demand, price pressures, and limited market diversification, hindering sustainable growth.",
        benefit:
          "De Koshur Crafts offers diverse models, from e-commerce to franchises, stabilizing revenue and fostering long-term business sustainability.",
        icon: service_icon,
      },
      {
        title: "Counterfeit Product Protection",
        challenge:
          "Counterfeit Kashmiri products devalue genuine craftsmanship, eroding artisan revenues and customer trust by misrepresenting authentic work as mass-produced replicas.",
        benefit:
          "De Koshur Crafts safeguards authenticity through strict verification, preserving artisans’ heritage and fostering trust with global customers.",
        icon: service_icon,
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
      <HeroSection />
      <FeatureArea />
      <AboutSection
        title="Empowering Kashmiri Artisans, Startups in Accessing American "
        color_title="Markets"
        subtitle="Welcome To B2B Connect - USA"
        description="A transformative and progressive platform with an investment of $3.7 million, connecting Kashmir's artisans, startups, and businesses to global markets, fostering fair trade, preserving heritage, and unlocking boundless opportunities for sustainable growth."
        items={[
          "Dream It: Envision your goals. We’ll provide the roadmap",
          "Define It: Select the partnership model tailored to your ambitions.",
          "Deliver It: Upload your credentials, verify your status, and join a league of visionary partners.",
          "Dominate It: Access our resources and watch your business flourish on the global stage.",
        ]}
        image={aboutImage}
        extraText={{
          title: "Handicraft Progressive Business Model for Every Vision",
          description:
            "Crafting Kashmir's Next Generations Future Together | Amir-e-Kabir's Legacy, Reimagined for Today's World",
        }}
      />
      <CounterArea />
      <CaseStudiesArea />
      <VendorPartnership />
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
      <FAQSection />
      <div>
        <hr />
      </div>
      <TestimonialSection />
      <CarouselSlider {...exampleData} />
      <ServicesArea {...ServicesAreaData} />
      <ProgressSection />
      <SellerNetworkSection />
      <FlagSection />
      <FooterUpper imageSrc={ecommerceImage} />
    </>
  );
};

export default Index;
