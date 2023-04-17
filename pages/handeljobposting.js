import { Divider, Steps } from "antd";

// import { useState } from "react";
import styles from "./jobPostingFlow/jobPosting.module.css";
import { useState } from "react";
import JopPosting from "./jobPostingFlow/JobPosting";
import SetBudget from "./jobPostingFlow/setBudget";
import ReviewPostProject from "./jobPostingFlow/reviewPostProject";
function HandleJobPosting() {
  let [next, setNext] = useState(0);

  const nextForm = () => {
    setNext(next + 1);
    console.log(next);
  };

  const data = [
    "  Graphic Designer for Social Media Ads.",
    "Experienced WordPress Developer for Custom Plugin Development.",
    "Professional Content Writer for E-commerce Product Descriptions.",
  ];
  switch (next) {
    case 0:
      return (
        <>
          <div className={styles.main}>
            <div className={styles.steps}>
              <Steps
                direction="vertical"
                current={next}
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
            {/* <HandleJobPosting /> */}

            <JopPosting nextForm={nextForm} />
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div className={styles.main}>
            <div className={styles.steps}>
              <Steps
                direction="vertical"
                current={next}
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
            {/* <HandleJobPosting /> */}

            <SetBudget nextForm={nextForm} />
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className={styles.main}>
            <div className={styles.steps}>
              <Steps
                direction="vertical"
                current={next}
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
            {/* <HandleJobPosting /> */}

            <ReviewPostProject nextForm={nextForm} />
          </div>
        </>
      );
  }
}

export default HandleJobPosting;
