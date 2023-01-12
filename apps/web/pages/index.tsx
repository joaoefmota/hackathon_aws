import axios from "axios";
import * as React from "react";
import VehicleList from "../components/VehicleList";
import styles from "./home.module.scss";
import Footer from "../components/Footer";

export default function Home() {
  const [vehicles, setVehicles] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/vehicles`)
      .then((response) => response.data)
      .then((result) => {
        setVehicles(result);
        console.log(result);
      });
  }, []);

  return (
    <div>
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
      <VehicleList vehicles={vehicles} />
      <Footer />
    </div>
  );
}
