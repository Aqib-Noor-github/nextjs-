import Head from "next/head";
import Image from "next/image";
import { Button, Divider } from "antd";

export default function SignUP() {
  return (
    <>
      <div className="mainSection">
        <div className="leftMain">
          <div className="headerContent">
            <div>
              <Image src="/Frame1.png" alt="logo" width={110} height={20} />
            </div>
          </div>
          <div className="leftCenter">
            <div className="signUpContent">
              <h1> Sign Up </h1>
              <div className="button">
                <Button value="default">
                  <Image
                    className="Image"
                    src="/Union1.png"
                    alt="btnLogo"
                    width={10}
                    height={10}
                  />
                  Google
                </Button>
                <Button value="default">
                  <Image
                    className="Image"
                    src="/Union2.png"
                    alt="btnLogo"
                    width={10}
                    height={10}
                  />
                  Linkedin
                </Button>
              </div>

              <Divider className="topContent">or sign up with email</Divider>

              <div className="inputField">
                <label>Email</label>
                <input placeholder="info@gmial.com" />
                <Button type="primary" className="continueBtn">
                  <p className="">Continue</p>
                </Button>
              </div>
              <Divider className="bottoncontent">
                {" "}
                Already have an account?
              </Divider>
              <Button type="primary" className="signInbtn">
                <p className="signIn">Sign In</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightImage">
            <div className="rightImg"> </div>
            <div className="rightImageText">
              "Good design is not just what looks good. It also needs to
              perform, convert, astonish, and fulfill its purpose."
              <div className="textAuthor">Ahmed - Brand Designer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
