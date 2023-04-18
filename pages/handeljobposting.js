import { Divider, Steps, Col, Row } from "antd";

import { useState } from "react";
import Header from "./header";
import styles from "./jobPostingFlow/jobPosting.module.css";
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
          <Header />
          <Divider style={{ marginBottom: "0rem" }}></Divider>
          <Row>
            <Col lg={0} xs={21} className={styles.mainSection}>
              <Steps
                current={next}
                direction="horizontal"
                items={[{}, {}, {}]}
                style={{
                  flexDirection: "row",
                  display: "flex",
                  width: "100%",
                  textAlign: "initial",
                  fontSize: "0",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              lg={7}
              xs={0}
              style={{ marginTop: "3rem", textAlign: "-webkit-center" }}
            >
              <Steps
                style={{ maxWidth: "16rem" }}
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
            </Col>
            <Col lg={2} xs={0}>
              <Divider type="vertical" style={{ height: "100%" }} />
            </Col>

            <Col lg={11} sm={23} style={{ marginTop: "3rem" }}>
              <JopPosting nextForm={nextForm} />
            </Col>
          </Row>
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

            <ReviewPostProject nextForm={nextForm} />
          </div>
        </>
      );
  }
}

export default HandleJobPosting;
