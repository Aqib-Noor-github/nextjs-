import {
  Form,
  Typography,
  Button,
  Input,
  List,
  Upload,
  Tag,
  Space,
  Radio,
} from "antd";
const { Title, Text, Paragraph } = Typography;
const { TextArea, Search } = Input;
import { UploadOutlined } from "@ant-design/icons";

import { useState } from "react";
import styles from "./jobPosting.module.css";

export default function JopPosting() {
  let [step, setStep] = useState(1);
  const contineu = () => {
    let stepNo = step + 1;

    setStep(stepNo);
  };
  const back = () => {
    let stepNo = step - 1;

    setStep(stepNo);
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
            <Title strong-level={2}>Tell Us About Your Job Opportunity</Title>
            <div>
              <Form layout="vertical">
                <Form.Item label="Title">
                  <Input placeholder="e.g ML Pipeline Manager" />
                  <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                    Help freelancers identify the job type.
                  </Text>
                </Form.Item>
              </Form>
              <List
                size="large"
                header={<div>Description</div>}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item style={{ borderBottom: "none" }}>{item}</List.Item>
                )}
              />
              <div style={{ marginTop: "2rem" }}>
                <Text> Description</Text>
                <TextArea
                  showCount
                  maxLength={5000}
                  style={{ height: 120, marginBottom: 24 }}
                  //   onChange={onChange}
                  placeholder="Give a brief job description, including the primary responsibilities
                 and required qualifications."
                />
              </div>
              <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                Help freelancers understand your job by including necessary
                information of your job.
              </Text>

              <div className={styles.uploadBtn}>
                <Upload>
                  <Button icon={<UploadOutlined />}> Upload</Button>
                </Upload>
                <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                  Max size 100MB
                </Text>
              </div>
              <Button
                style={{ marginBottom: "2rem", border: "none", color: "blue" }}
              >
                See examples of great jobs
              </Button>

              <div className={styles.btn}>
                <Button size="large" onClick={back}>
                  Back
                </Button>
                <Button size="large" onClick={contineu}>
                  Continue
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
            <Title strong-level={2}>Skills and experience level</Title>
            <div>
              <Form layout="vertical">
                <Form.Item label="Title">
                  <Search placeholder="input search text" enterButton />
                  <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                    For attracting freelancers select 3 to 5 skills.
                  </Text>
                </Form.Item>
              </Form>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text orientation="left" style={{ marginBottom: "1rem" }}>
                  Select skills required for
                  <span className={styles.span}> UX/UI Design </span> job
                </Text>
                <Space size={[0, 8]}>
                  <Tag>magenta</Tag>
                  <Tag>red</Tag>
                  <Tag>volcano</Tag>
                  <Tag>orange</Tag>
                  <Tag>gold</Tag>
                  <Tag>lime</Tag>
                  <Tag>green</Tag>
                  <Tag>cyan</Tag>
                  <Tag>blue</Tag>
                  <Tag>geekblue</Tag>
                  <Tag>purple</Tag>
                </Space>
              </div>
              <div>
                <Title style={{ textAlign: "left" }}>Experience Level</Title>
                <Paragraph style={{ maxWidth: "28rem" }}>
                  What level of experience is required for your
                  <span className={styles.span}> UX/UI Design </span>
                  job?{" "}
                  <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                    {" "}
                    You will still receive proposals from freelancers having
                    different level of expertise. But this helps us in matching
                    your job with the right freelancers.
                  </span>
                </Paragraph>
                <Radio.Group style={{ marginBottom: "3rem" }}>
                  <Space direction="vertical">
                    <Radio value={1}>Beginner (Relatively new)</Radio>
                    <Text className={styles.radioText}>
                      May have no to 2 years of experience
                    </Text>
                    <Radio value={2}>Intermediate (Notable experience)</Radio>
                    <Text className={styles.radioText}>
                      May have 2 to 5 years of experience
                    </Text>

                    <Radio value={3}>Expert (In-depth experience)</Radio>
                    <Text className={styles.radioText}>
                      May have 5 to 10+ years of experience
                    </Text>
                  </Space>
                </Radio.Group>
              </div>

              <Button
                style={{ marginBottom: "2rem", border: "none", color: "blue" }}
              >
                See examples of great jobs
              </Button>

              <div className={styles.btn}>
                <Button size="large" onClick={back}>
                  Back
                </Button>
                <Button size="large" onClick={contineu}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Title strong-level={2}> Project Duration</Title>

            <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              What is the estimated duration of your project?
            </Text>

            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>Beginner (Relatively new)</Radio>

                <Radio value={2}>Intermediate (Notable experience)</Radio>

                <Radio value={3}>Expert (In-depth experience)</Radio>
              </Space>
            </Radio.Group>
            <Button
              style={{ marginBottom: "2rem", border: "none", color: "blue" }}
            >
              See examples of great jobs
            </Button>

            <div className={styles.btn}>
              <Button size="large" onClick={back}>
                Back
              </Button>
              <Button size="large" onClick={contineu}>
                Continue
              </Button>
            </div>
          </div>
        </>
      );
  }
}
