import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footercontainer"]}>
        <div className={styles["footertext"]}>HELLO@VINTAGE.DE</div>
        <div className={styles["footertext"]}> (478) 458-4258</div>
      </div>
      <div className={styles["footerig"]}></div>
      <div className={styles["footerfb"]}></div>
    </div>
  );
}

export default Footer;
