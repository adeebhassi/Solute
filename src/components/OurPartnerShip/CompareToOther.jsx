import React, { useState, useEffect, useId } from "react";

function CompareToOther({
  sectionTitle,
  sectionSubtitle,
  platformData,
  tableData,
  highlightedTexts,
  GreenHighlightedTexts,
  warningText=""
}) {
  
  const [sectionCount, setSectionCount] = useState(0); // Track how many times the section has been rendered
  const uniqueId = useId();
  useEffect(() => {
    setSectionCount((prevCount) => prevCount + 1); // Increment counter when component mounts
  }, []);
  console.log(highlightedTexts,GreenHighlightedTexts)
  const scrollLeft = (containerId) => {
    console.log(containerId);
    document.getElementById(containerId).scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = (containerId) => {
    console.log(containerId);
    document.getElementById(containerId).scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  // const highlighttext = ["abc", "cds", "No Service","No"];
  // const GreenHighlightText = ["Free","Free/Early","Yes"];
  console.log(platformData);
  console.log(tableData);


  return (
    <section className="compare-to-other">
      <div className="container mt-5">
        <div className="cs_tabs">
          <div className="cs_slider_heading_1">
            <div className="cs_section_heading cs_style_1">
              <h3
                className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10 "
                style={{ lineHeight: "19px" }}
              >
                <img
                  src="assets/img/icons/fan.svg"
                  alt=""
                  className="cs_section_subheading_icon"
                />
                {sectionSubtitle}
              </h3>
              <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 ms-2">
                {sectionTitle}
              </h2>
            </div>
          </div>
          <div className="cs_height_45 cs_height_lg_45"></div>
          <div className="cs_tab_body">
            <div className="cs_tab">
              <div className="row cs_gap_y_30 cs_row_gap_30">
                {/* Platform Parameter Section */}
                <div className="col-lg-3 col-md-6 col-6">
                  <div
                    className="cs_pricing_plan cs_style_1"
                    style={{ background: "#b8b7b74d", marginRight: "0rem" }}
                  >
                    <img
                      src="assets/img/shapes/price_shape.svg"
                      alt=""
                      className="cs_pricing_shape"
                    />
                    <div className="cs_pricing_plan_head">
                      <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">
                        {tableData.heading} {/* Dynamic Heading */}
                      </h2>
                    </div>
                    <table className="table table-striped">
                      <tbody>
                        {tableData.list.map((item, index) => (
                          <tr key={index}>
                            <td>{item}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Platform Comparison Section (Scrollable) */}
                <div className="col-lg-8 col-md-6 col-6">
                  <div
                    id={`scroll-container-${uniqueId}`}
                    className="last-sec pricing-section-1"
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      scrollSnapType: "x mandatory",
                      scrollbarWidth: "none",
                    }}
                  >
                    {platformData.map((data, index) => (
                      <div
                        key={index}
                        className={"cs_pricing_plan cs_style_1"}
                        style={{ marginRight: "20px" }}
                      >
                        <img
                          src="assets/img/shapes/price_shape.svg"
                          alt=""
                          className="cs_pricing_shape"
                        />
                        <div className="cs_pricing_plan_head">
                          <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">
                            {data.platform}
                          </h2>
                        </div>
                        <table className="table table-striped">
                        <tbody>
  {data.rows.map((row, i) => {
    // Split the row into individual words
    const words = row.split(/\s+/); 
    let combinedRow = []; // To store the processed row content

    let index = 0;
    while (index < words.length) {
      const currentWord = words[index];
      const nextWord = words[index + 1];

      // Check if the current word and the next word form a multi-word phrase
      const combinedWord = currentWord + " " + nextWord;

      // Check for multi-word phrase in highlight list
      const isHighlighted =  highlightedTexts.some(
        (item) => item.toLowerCase() === combinedWord.toLowerCase()
      );
      const isGreenHighlighted = GreenHighlightedTexts.some(
        (item) => item.toLowerCase() === combinedWord.toLowerCase()
      );

      // If multi-word phrase is found, highlight it
      if (isHighlighted || isGreenHighlighted) {
        combinedRow.push(
          <span
            key={index}
            className={isHighlighted ? "highlight-text" : "green-highlight-text"}
          >
            {combinedWord + " "}
          </span>
        );
        index += 2; // Skip the next word as it's part of the phrase
      } else {
        // Check if the current word itself is in the highlight list
        const isSingleWordHighlighted =highlightedTexts.some(
          (item) => item.toLowerCase() === currentWord.toLowerCase()
        );
        const isSingleWordGreenHighlighted = GreenHighlightedTexts.some(
          (item) => item.toLowerCase() === currentWord.toLowerCase()
        );

        // If single word is highlighted, apply the appropriate class
        if (isSingleWordHighlighted) {
          combinedRow.push(
            <span key={index} className="highlight-text">
              {currentWord + " "}
            </span>
          );
        } else if (isSingleWordGreenHighlighted) {
          combinedRow.push(
            <span key={index} className="green-highlight-text">
              {currentWord + " "}
            </span>
          );
        } else {
          // Otherwise, display the word normally
          combinedRow.push(<span key={index}>{currentWord + " "}</span>);
        }
        index += 1;
      }
    }

    return (
      <tr key={i}>
        <td>{combinedRow}</td>
      </tr>
    );
  })}
</tbody>


                          {/* {data.rows.map((row, i) => {
                             
                             const isHighlighted = highlighttext.some(item => row.includes(item));  
                             
                             const isGreenHighlighted = GreenHighlightText.some(item => row.includes(item));  

                             const className = isHighlighted
                               ? "highlight-text"
                               : isGreenHighlighted
                               ? "green-highlight-text"
                               : "";

                             return (
                               <tr key={i}>
                                
                                 <td>
                                   {className ? (
                                     <span className={className} dangerouslySetInnerHTML={{ __html: row }}></span>
                                   ) : (
                                     row
                                   )}
                                 </td>

                               </tr>
                             );
                           })} */}

                          {/* <tbody>
                            {data.rows.map((row, i) => (
                              <tr key={i}>
                                <td>
                                  {row.split(" ").map((word, index) => (
                                    <span
                                      key={index}
                                      className={
                                        highlightedTexts.includes(word)
                                          ? "highlight-text"
                                          : ""
                                      }
                                      dangerouslySetInnerHTML={{
                                        __html: word + " ",
                                      }}
                                    ></span>
                                  ))}{" "}
                                </td>
                              </tr>
                            ))}
                          </tbody> */}
                        </table>
                      </div>
                    ))}
                  </div>
                  {warningText ? <p><span style={{color:"#ff3c00"}}>*</span>{warningText}</p> : ""}
                    
                  {/* Scroll Buttons */}
                  <div className="controls">
                    <button
                      className="scroll-btn scroll-btn-left"
                      onClick={() => scrollLeft(`scroll-container-${uniqueId}`)}
                    >
                      <i className="bi bi-arrow-left-circle-fill"></i>
                    </button>
                    <button
                      className="scroll-btn scroll-btn-right"
                      onClick={() =>
                        scrollRight(`scroll-container-${uniqueId}`)
                      }
                    >
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
}

export default CompareToOther;

// import React from 'react';
// import CompareToOther from './components/CompareToOther';

// const PricingPage = () => {
//   const sectionTitle = 'De Koshur Crafts USA Ecommerce Platform';
//   const sectionSubtitle = 'Compare to Other Platforms';
//   const platformParameters = [
//     'Multimedia Content',
//     'Personalized Suggestions',
//     'Thematic Collections',
//     'Pricing Transparency',
//     'Value-Added Services',
//     'International Shipping',
//     'Localization',
//     'B2B Networking',
//     'Forums/Engagement',
//     'Customer Education',
//     'Return Policies',
//     'Brand Trust',
//     'Influencer Partnerships',
//   ];
//   const pricingData = [
//     {
//       platform: 'De Koshur Crafts',
//       rows: [
//         'Artisan-Focused',
//         'Artisan-Oriented',
//         'Strong',
//         'Planned',
//         'Extensive Resources',
//         'Tailored Artisan Returns',
//         'Emerging Cultural Trust',
//         'Planned',
//       ],
//     },
//     {
//       platform: 'Amazon Platform',
//       rows: ['Flexible Return Policies', 'Very High Trust', 'Extensive Partnerships'],
//     },
//   ];
//   const highlightedTexts = [
//     'Thorough',
//     'Full',
//     'deep focus',
//     'High',
//     'Yes',
//     'Rigorous',
//     'Prominent',
//     'Detailed',
//     'High',
//     'Integrated',
//     'Extensive',
//     'Highly',
//     'High',
//     'High',
//     'High',
//     'High',
//     'Tailored',
//     'Emerging',
//     'Cultural',
//     'High',
//     'Advanced',
//     'High',
//     'Extensive',
//     'Extensive',
//     'High',
//     'Extensive',
//     'High',
//   ];

//   return (
//     <CompareToOther
//       sectionTitle={sectionTitle}
//       sectionSubtitle={sectionSubtitle}
//       platformParameters={platformParameters}
//       pricingData={pricingData}
//       highlightedTexts={highlightedTexts}
//     />
//   );
// };

// export default PricingPage;
