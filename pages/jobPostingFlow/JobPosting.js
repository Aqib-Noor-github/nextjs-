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
const { TextArea } = Input;
import {
  UploadOutlined,
  HomeOutlined,
  MessageOutlined,
  HeartOutlined,
  BellOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import styles from "./jobPosting.module.css";

export default function JopPosting({ nextForm }) {
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
              header={<div>Example titles</div>}
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

            <div className={styles.button}>
              <Upload listType="picture" className={styles.picWidth}>
                <Button icon={<UploadOutlined />}>Upload files</Button>
                <Text
                  style={{ color: "rgba(0, 0, 0, 0.45)", marginLeft: "1rem" }}
                >
                  Max size 100MB
                </Text>
              </Upload>
            </div>
            <Button className={styles.textBtn}>
              <Text className={styles.btnText}>See examples of great jobs</Text>
            </Button>

            <div className={styles.button} style={{ justifyContent: "end" }}>
              <Button size="large" onClick={back} className={styles.bottmBtn}>
                Back
              </Button>
              <Button
                size="large"
                onClick={contineu}
                className={styles.bottmBtn}
              >
                Continue
              </Button>
            </div>
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
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className={styles.jobSection}>
            <Title
              level={3}
              style={{ marginTop: "0rem", marginBottom: "1.5rem" }}
            >
              Skills and experience level
            </Title>

            <Form layout="vertical">
              <Form.Item label="Search skills or add your own">
                <Input
                  icon={<SearchOutlined />}
                  placeholder="Start typing"
                  style={{ marginBottom: ".5rem" }}
                />
                <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                  For attracting freelancers select{" "}
                  <span style={{ color: "#1D8EA4" }}> 3 to 5 </span> skills.
                </Text>
              </Form.Item>
            </Form>

            <Text>
              Select skills required for
              <span style={{ color: "#1D8EA4" }}> UX/UI Design </span> job
            </Text>

            <Space style={{ marginTop: ".5rem", flexWrap: "wrap" }}>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>Web Design</Tag>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>
                User Interface Design
              </Tag>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>
                User Experience Design
              </Tag>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>Typography</Tag>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>CMS</Tag>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>WordPress</Tag>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>Elementor</Tag>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>Figma</Tag>
              <Tag style={{ backgroundColor: "#d5e3e3" }}>Adobe xd</Tag>
            </Space>

            <Title level={3} style={{ textAlign: "left" }}>
              Experience Level
            </Title>

            <Paragraph>
              <span style={{ display: "block" }}>
                What level of experience is required for your
                <span style={{ color: "#1D8EA4" }}> UX/UI Design </span>
                job?
              </span>
              <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                You will still receive proposals from freelancers having
                different level of expertise. But this helps us in matching your
                job with the right freelancers.
              </span>
            </Paragraph>

            <Radio.Group style={{ marginBottom: "3rem", display: "block" }}>
              <Space direction="vertical">
                <Radio value={1} style={{ marginTop: "2rem" }}>
                  Beginner (Relatively new)
                </Radio>
                <Text className={styles.radioText}>
                  May have no to 2 years of experience
                </Text>
                <Text className={styles.radioText}>
                  The estimated hourly rate is $10/hour to $20/hour
                </Text>
                <Radio value={2} style={{ marginTop: "1rem" }}>
                  Intermediate (Notable experience)
                </Radio>
                <Text className={styles.radioText}>
                  May have 2 to 5 years of experience
                </Text>
                <Text className={styles.radioText}>
                  The estimated hourly rate is $20/hour to $30/hour
                </Text>

                <Radio value={3} style={{ marginTop: "1rem" }}>
                  Expert (In-depth experience)
                </Radio>
                <Text className={styles.radioText}>
                  May have 5 to 10+ years of experience
                </Text>
                <Text className={styles.radioText}>
                  The estimated hourly rate is $20/hour to $30/hour
                </Text>
              </Space>
            </Radio.Group>

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
              <Button size="large" onClick={contineu}>
                Continue
              </Button>
            </div>

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
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div className={styles.jobSection}>
            <Title level={3} style={{ marginTop: "0rem" }}>
              Project Duration
            </Title>

            <Text style={{ color: "rgba(0, 0, 0, 0.45)" }}>
              What is the estimated duration of your project?
            </Text>

            <Radio.Group style={{ marginTop: "2rem", display: "block" }}>
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
            <div className={styles.btnGroup}>
              <Button
                style={{
                  marginBottom: "2rem",
                  border: "none",
                  marginLeft: "-1rem",
                }}
              >
                <Text className={styles.btnText}>
                  See examples of great jobs
                </Text>
              </Button>

              <div className={styles.button} style={{ justifyContent: "end" }}>
                <Button size="large" onClick={back}>
                  Back
                </Button>
                <Button size="large" onClick={nextForm}>
                  Next: Budget
                </Button>
              </div>
            </div>
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
          </div>
        </>
      );
  }
}
