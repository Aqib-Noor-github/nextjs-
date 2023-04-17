import { Form, Typography, Button, Input, Space, Radio } from "antd";
const { Title, Text, Paragraph } = Typography;

import { useState } from "react";
import styles from "./jobPosting.module.css";

export default function ReviewPostProject({ nextForm, next }) {
  console.log(next);
  let [step, setStep] = useState(1);
  const contineu = () => {
    let stepNo = step + 1;

    setStep(stepNo);
  };
  const back = () => {
    if (step > 1) {
      let stepNo = step - 1;
      setStep(stepNo);
    }
  };

  const data = [
    "  Graphic Designer for Social Media Ads.",
    "Experienced WordPress Developer for Custom Plugin Development.",
    "Professional Content Writer for E-commerce Product Descriptions.",
  ];

  switch (step) {
    case 1:
      return (
        <>
          <div style={{ marginTop: "4rem" }}>
            <Title strong-level={2}>Review and Post Your project</Title>
            <div>
              <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                Please review the details before posting the job. You can edit
                the details if you need to change something.
              </Text>

              <div className={styles.btn}>
                <Button size="large" onClick={back}>
                  Back
                </Button>
                <Button
                  size="large"
                  onClick={nextForm}
                  style={{ background: "#1D8EA4", color: "white" }}
                >
                  Post Job
                </Button>
              </div>
            </div>
          </div>
        </>
      );
  }
}
