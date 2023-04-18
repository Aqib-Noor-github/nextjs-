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
  Row,
  Col,
  Divider,
} from "antd";
const { Title, Text, Paragraph } = Typography;
const { TextArea, Search } = Input;
import {
  UploadOutlined,
  HomeOutlined,
  MessageOutlined,
  HeartOutlined,
  BellOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import styles from "./jobPosting.module.css";

export default function JopPosting({ nextForm, next }) {
  console.log(next);
  let [step, setStep] = useState(1);
  const contineu = () => {
    setStep(step + 1);
  };

  const back = () => {
    if (step > 1) {
      setStep(step - 1);
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
          <div className={styles.jobSection}>
            <Title
              level={3}
              style={{ marginTop: "0rem", marginBottom: "1.5rem" }}
            >
              Tell Us About Your Job Opportunity
            </Title>

            <Form layout="vertical">
              <Form.Item label="Title">
                <Input
                  placeholder="e.g ML Pipeline Manager"
                  style={{ marginBottom: ".5rem" }}
                />
                <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                  Help freelancers identify the job type.
                </Text>
              </Form.Item>
            </Form>
            <List
              size="large"
              header={<div style={{ fontWeight: "500" }}>Example titles</div>}
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  style={{ borderBottom: "none", paddingBottom: ".3rem" }}
                >
                  {item}
                </List.Item>
              )}
            />
            <Form layout="vertical" className={styles.form}>
              <Form.Item label="Description">
                <TextArea
                  showCount
                  maxLength={5000}
                  style={{ height: 120, marginBottom: "1.5rem" }}
                  placeholder="Give a brief job description, including the primary responsibilities
                 and required qualifications."
                />
              </Form.Item>
              <Text className={styles.discriptionText}>
                Help freelancers understand your job by including necessary
                information of your job.
              </Text>
            </Form>

            {/* icon for mobile   */}

            <div className={styles.mobileDisplay}>
              <Divider style={{ marginBottom: ".7rem" }}></Divider>
              <Row>
                <Col xs={6} style={{ textAlign: "center" }}>
                  <HomeOutlined style={{ fontSize: "1.5rem" }} />
                </Col>
                <Col xs={6} style={{ textAlign: "center" }}>
                  <MessageOutlined style={{ fontSize: "1.5rem" }} />
                </Col>
                <Col xs={6} style={{ textAlign: "center" }}>
                  <BellOutlined style={{ fontSize: "1.5rem" }} />
                </Col>
                <Col xs={6} style={{ textAlign: "center" }}>
                  <HeartOutlined style={{ fontSize: "1.5rem" }} />
                </Col>
              </Row>
            </div>

            {/* end */}

            <div className={styles.button}>
              <Upload>
                <Button icon={<UploadOutlined />}> Upload files</Button>
              </Upload>
              <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                Max size 100MB
              </Text>
            </div>

            <Button
              style={{
                marginBottom: "2rem",
                border: "none",
                marginLeft: "-1rem",
              }}
            >
              <Text className={styles.btnText}>See examples of great jobs</Text>
            </Button>

            <div className={styles.button} style={{ justifyContent: "end" }}>
              <Button size="large" onClick={back}>
                Back
              </Button>
              <Button size="large" disabled onClick={contineu}>
                Continue
              </Button>
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
                  job?
                  <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>
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

            <Radio.Group style={{ marginTop: "2rem" }}>
              <Space direction="vertical">
                <Radio value={1}>
                  More then 6 months (Large and complex project)
                </Radio>

                <Radio value={2}>3 to 6 months (Medium project)</Radio>

                <Radio value={3}>
                  1 to 3 months (Small project or quick fix)
                </Radio>
              </Space>
            </Radio.Group>
            <Button
              style={{
                marginTop: "10rem",
                marginBottom: "2rem",
                border: "none",
                color: "blue",
                maxWidth: "10rem",
              }}
            >
              See examples of great jobs
            </Button>

            <div className={styles.btn}>
              <Button size="large" onClick={back}>
                Back
              </Button>
              <Button
                size="large"
                onClick={nextForm}
                style={{
                  marginBottom: "0rem",
                  background: "#1D8EA4",
                  color: "white",
                }}
              >
                Next buget
              </Button>
            </div>
          </div>
        </>
      );
  }
}
