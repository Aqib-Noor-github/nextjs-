import { Form, Typography, Button, Input, Space, Radio } from "antd";
const { Title, Text, Paragraph } = Typography;

import { useState } from "react";
import styles from "./jobPosting.module.css";

export default function SetBudget({ nextForm, next }) {
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
            <Title strong-level={2}>Set Your Budget</Title>
            <div>
              <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                Please select one option from below. We will match with
                freelancers who suit your budget.
              </Text>
              <Radio.Group style={{ marginBottom: "3rem" }}>
                <Space direction="vertical">
                  <Radio value={1}>
                    Hourly Rate (Pay based on the number of hours the freelancer
                    works)
                  </Radio>

                  <Radio value={2}>
                    Fixed Price Project (Pay freelancer by setting a fixed price
                    for the project)
                  </Radio>
                </Space>
              </Radio.Group>
              <Title strong-level={2}>Set hourly rate</Title>
              <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                If you want to set a fixed hourly rate then enter the same value
                in both Min and Max rate fields.
              </Text>

              <Form layout="vertical" style={{ display: "flex", gap: "2rem" }}>
                <Form.Item label="Min rate">
                  <Input placeholder="Basic usage" />
                </Form.Item>
                <Form.Item label="Max rate">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Form>
              <div>
                <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                  Freelancers will see that you have set the range of hourly
                  rate starting from $20.00/hour to $30.00/hour.
                </Text>
              </div>
              <Text>
                Freelancers are charging from{" "}
                <span style={{ color: "blue" }}> $20.00/hour</span> to
                $30.00/hour for projects similar to yours.
              </Text>
              <Button
                style={{ marginBottom: "2rem", border: "none", color: "blue" }}
              >
                Continue without an hourly rate
              </Button>

              <div className={styles.btn}>
                <Button size="large" onClick={back}>
                  Back
                </Button>
                <Button
                  size="large"
                  onClick={contineu}
                  style={{ background: "#1D8EA4", color: "white" }}
                >
                  Next: Review
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div style={{ marginTop: "4rem" }}>
            <Title strong-level={2}>Set Your Budget</Title>
            <div>
              <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                Please select one option from below. We will match with
                freelancers who suit your budget.
              </Text>
              <Radio.Group style={{ marginBottom: "3rem" }}>
                <Space direction="vertical">
                  <Radio value={1}>
                    Hourly Rate (Pay based on the number of hours the freelancer
                    works)
                  </Radio>

                  <Radio value={2}>
                    Fixed Price Project (Pay freelancer by setting a fixed price
                    for the project)
                  </Radio>
                </Space>
              </Radio.Group>
              <Title strong-level={2}>Set Fix Price for the job </Title>
              <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                You would be able to divide the project into milestones.
              </Text>
              <Form layout="vertical">
                <Form.Item label="Max Price (USD)">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </Form>
              <div>
                <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                  Freelancers will see that you have set a fixed price for your
                  job.
                </Text>
              </div>
              <Button
                style={{ marginBottom: "2rem", border: "none", color: "blue" }}
              >
                Continue without setting a fixed price
              </Button>

              <div className={styles.btn}>
                <Button size="large" onClick={back}>
                  Back
                </Button>
                <Button
                  size="large"
                  onClick={nextForm}
                  style={{ background: "#1D8EA4", color: "white" }}
                >
                  Next: Review
                </Button>
              </div>
            </div>
          </div>
        </>
      );
  }
}
