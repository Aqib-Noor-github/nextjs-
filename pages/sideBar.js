import { Divider, Steps } from "antd";

// import { useState } from "react";
import styles from "./jobPosting.module.css";
import React from "react";

import JopPosting from "./JobPosting";

export default function Sidebar() {
  //   const [current, setCurrent] = useState(0);
  //   const contineu = () => {
  //     let step = current + 1;
  //     setCurrent(step);

  //     console.log("onChange:", current);
  //   };
  //   const back = () => {
  //     let step = current - 1;
  //     setCurrent(step);

  //     console.log("onChange:", current);
  //   };

  const data = [
    "  Graphic Designer for Social Media Ads.",
    "Experienced WordPress Developer for Custom Plugin Development.",
    "Professional Content Writer for E-commerce Product Descriptions.",
  ];

  return (
    <>
      <div className={styles.main}>
        <div className={styles.steps}>
          <Steps
            direction="vertical"
            // current={current}
            items={[
              {
                title: "Details",
                description: "Fill basic detail.",
              },
              {
                title: "Budget",
                description: "Fill budget detail.",
              },
              {
                title: "Review",
                description: "Review detail before posting.",
              },
            ]}
          />
        </div>
        <div>
          <Divider type="vertical" style={{ height: "100%" }} />
        </div>
        <JopPosting />
      </div>
    </>
  );
}
