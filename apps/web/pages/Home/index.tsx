import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "../Home/home.module.scss";

const Home = () => {
  return (
    <>
      {/*Header*/}
      <div className={styles["test"]}>
        <button>Log In</button>
        <button>Register</button>
        <button></button>
      </div>
    </>
  );
};
export default Home;
