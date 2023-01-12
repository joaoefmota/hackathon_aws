import axios from "axios";
import * as React from "react";
import VehicleList from "../components/VehicleList";
import styles from "./home.module.scss";
import Footer from "../components/Footer";

export default function Home() {
  const [vehicles, setVehicles] = React.useState([]);
  const [show, setShow] = React.useState("");
  const [show2, setShow2] = React.useState("");

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
    <div className={styles["global-text"]}>
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
      <div className={styles["formsearch"]}>
        <form className={styles["formmake"]}>
          <label htmlFor="vehicle-select">
            by Make:
            <select
              className={styles["select"]}
              value={show}
              onChange={(a) => setShow(a.target.value)}
            >
              <option value="">---</option>
              {vehicles.map((accessory) => (
                <option value={accessory.id} name={accessory.brand}>
                  {accessory.brand}
                </option>
              ))}
            </select>
          </label>
        </form>
        <form className={styles["formyear"]}>
          <label htmlFor="vehicle-select">
            by year:
            <select
              className={styles["select"]}
              value={show2}
              onChange={(a) => setShow2(a.target.value)}
            >
              <option value="">---</option>
              {vehicles.map((accessory) => (
                <option value={accessory.id} name={accessory.brand}>
                  {accessory.yearcar}
                </option>
              ))}
            </select>
          </label>
        </form>
        {/*<VehicleList vehicles={vehicles} />*/}
      </div>

      {/*Body*/}
      {/*Footer*/}
      <Footer />
      {/*Footer*/}
    </div>
  );
}
