import client from "../../../util/utils";
// import style from "./signUPstyle.css";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";
export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: "signUPpage",
  });
  console.log("entries", entries);
  console.log("items", JSON.stringify(entries.items, null, 2));

  return {
    props: {
      items: entries.items,
    },
  };
}

const SignUp = ({ items }) => {
  console.log(items);
  return (
    <div>
      <h1> Sign Up Page</h1>
      <div className={styles.mainSection}>
        {items.map((item, index) => (
          <div key={index}>
            <h1 className={styles.mainSectiontitle}>{item.fields.title}</h1>
            <div className={styles.mainSectionfields}>
              <h2 className={styles.mainSectionUserName}>
                {item.fields.userName}
              </h2>
              <input
                placeholder="user name"
                className={styles.mainSectionInput}
              />
              <h2 className={styles.mainSectionPassword}>
                {item.fields.password}
              </h2>
              <input
                className={styles.mainSectionInput}
                placeholder="Password"
              />

              <div className={styles.mainSectionButtondiv}>
                <Button type="primary" className={styles.mainSectionButton}>
                  {" "}
                  Log In
                </Button>
              </div>

              <div className={styles.mainSectioBottom}>
                <p> {item.fields.dontHaveAnAccount}</p>
                <p> {item.fields.forgetPassword}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignUp;
