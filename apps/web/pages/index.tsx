import * as React from "react";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      {/*Header*/}
      <div className={styles["test"]}>
        <div className={styles["test5"]}>
          <button className={styles["test4"]}></button>
          <div className={styles["test6"]}></div>
          <div className={styles["test2"]}>
            <button className={styles["test1"]}>Log In</button>
            <button className={styles["test1"]}>Register</button>
          </div>
        </div>
      </div>
      {/*Header*/}
      {/*Body*/}
      <div className={styles["body"]}>
        <div className={styles["bodytext"]}>Let’s vintaginate your journey</div>
        <div className={styles["bodytext2"]}>
          Choose your perfect vintage car
        </div>
      </div>
      {/*Body*/}
      {/*Footer*/}
      <div className={styles["footer"]}>
        <div className={styles["footercontainer"]}>
          <div className={styles["footertext"]}>HELLO@VINTAGE.DE</div>
          <div className={styles["footertext"]}> (478) 458-4258</div>
        </div>
        <div className={styles["footerig"]}></div>
        <div className={styles["footerfb"]}></div>
      </div>
      {/*Footer*/}
    </>
  );
}
