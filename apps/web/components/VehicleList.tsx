import React from "react";
import VehicleListItem from "./VehicleListItem";
import styles from "./vehicleList.module.scss";

export interface VehicleListProps {
  vehicles: Vehicle[];
}

// This is the list that maps vehicles into a VehicleListItem each
export default function VehicleList({ vehicles }: VehicleListProps) {
  const [show, setShow] = React.useState([]);
  const [show2, setShow2] = React.useState([]);
  console.log(show);

  return (
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
      {vehicles
        .filter((car) =>
          show ? car.id == show : "Where are the cars ???"
        )
        .map((car) => {
          <div className={styles.vehicleContainer} key={car.id}>
            <VehicleListItem vehicle={vehicles} />
          </div>;
        })}
    </div>
  );
}
