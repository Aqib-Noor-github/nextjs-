import React from "react";
import { Typography, Divider, Col, Row, Button } from "antd";
const { Title } = Typography;

function SignIn() {
  return (
    <>
      <div className="main">
        <div className="logo"> </div>
        <style jsx>
          {`
            .logo {
              margin-top: 25px;
              margin-left: 25px;
              background-image: url("/logo.svg");
              height: 50px;
              background-repeat: no-repeat;
            }
            .Form {
              width: 577px;
              height: 690px;
              margin: auto;
            }
          `}
        </style>

        <div className="Form">
          <Title>Sign Up</Title>
          <Divider>or sign up with</Divider>
          <Row>
            <Col span={12}>
              <Button block>Default</Button>
            </Col>
            <Col span={12}>
              <Button block>Default</Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default SignIn;
