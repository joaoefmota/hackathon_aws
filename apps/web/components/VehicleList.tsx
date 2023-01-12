import React from "react";
import VehicleListItem from "./VehicleListItem";
import styles from "./vehicleList.module.scss";

export interface VehicleListProps {
  vehicles: Vehicle[];
}

// This is the list that maps vehicles into a VehicleListItem each
export default function VehicleList({ vehicles }: VehicleListProps) {
  const [brand, setBrand] = React.useState<string>("");
  const [year, setYear] = React.useState<number>(0);
  console.log(brand);

  const [filteredVehicles, setFilteredVehicles] =
    React.useState<Vehicle[]>(vehicles);
  React.useEffect(() => {
    setFilteredVehicles(
      vehicles.filter((vehicle) => {
        let keep = true;
        keep &&= brand === "" || vehicle.brand.includes(brand);
        keep &&= year === 0 || vehicle.yearcar === year;
        return keep;
      })
    );
  }, [brand, year]);

  return (
    <div className={styles["formsearch"]}>
      <form className={styles["formmake"]}>
        <label htmlFor="vehicle-select">
          by Make:
          <select
            className={styles["select"]}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Select brand...</option>
            {vehicles.map((vehicle) => (
              <option value={vehicle.brand}>{vehicle.brand}</option>
            ))}
          </select>
        </label>
      </form>
      <form className={styles["formyear"]}>
        <label htmlFor="vehicle-select">
          by year:
          <select
            className={styles["select"]}
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          >
            <option value={0}>Select year...</option>
            {vehicles.map((vehicle) => (
              <option value={vehicle.yearcar}>{vehicle.yearcar}</option>
            ))}
          </select>
        </label>
      </form>
      {filteredVehicles.map((vehicle) => (
        <div className={styles.vehicleContainer} key={vehicle.id}>
          <VehicleListItem vehicle={vehicle} />
        </div>
      ))}
    </div>
  );
}
