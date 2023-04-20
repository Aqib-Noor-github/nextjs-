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
  console.log(next);

  switch (next) {
    case 0:
      return (
        <>
          <Header />

          <Divider style={{ marginBottom: "0rem" }}></Divider>

          <Row>
            <Col lg={0} xs={21} style={{ margin: "1rem auto 0rem" }}>
              <Steps
                current={next}
                direction="horizontal"
                items={[{}, {}, {}]}
                style={{ flexDirection: "row" }}
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
          <Header />
          <Divider style={{ marginBottom: "0rem" }}></Divider>
          <Row>
            <Col lg={0} xs={21} className={styles.mainSection}>
              <Steps
                current={next}
                direction="horizontal"
                items={[{}, {}, {}]}
                className={styles.mblStep}
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
              <SetBudget nextForm={nextForm} />
            </Col>
          </Row>
        </>
      );
    case 2:
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
  }
}

export default HandleJobPosting;
