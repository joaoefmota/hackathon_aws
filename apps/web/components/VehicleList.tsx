import React, { useState, useEffect } from "react";
import VehicleListItem from "./VehicleListItem";
import styles from "./vehicleList.module.scss";

export interface VehicleListProps {
  vehicles: Vehicle[];
}

// This is the list that maps vehicles into a VehicleListItem each
export default function VehicleList({ vehicles }: VehicleListProps) {
  const [brand, setBrand] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  useEffect(() => {
    setFilteredVehicles(
      vehicles.filter((vehicle) => {
        let keep = true;
        keep &&= brand === "" || vehicle.brand.includes(brand);
        keep &&= year === 0 || vehicle.yearcar === year;
        return keep;
      })
    );
  }, [brand, year, vehicles]);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles["formsearch"]}>
      <div className={styles["search-container"]}>
        <select
          className={styles["select"]}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">by make</option>
          {vehicles.map((vehicle) => (
            <option value={vehicle.brand}>{vehicle.brand}</option>
          ))}
        </select>

        <select
          className={styles["select"]}
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        >
          <option value={0}>by year</option>
          {vehicles.map((vehicle) => (
            <option value={vehicle.yearcar}>{vehicle.yearcar}</option>
          ))}
        </select>
      </div>
      <div className={styles["mainbox-car"]}>
        {filteredVehicles == null
          ? (showAll || vehicles.length <= 4
              ? vehicles
              : vehicles.slice(0, 4)
            ).map((vehicle: Vehicle) => (
              <div className={styles.vehicleContainer} key={vehicle.id}>
                <VehicleListItem vehicle={vehicle} />
              </div>
            ))
          : (showAll || filteredVehicles.length <= 4
              ? filteredVehicles
              : filteredVehicles.slice(0, 4)
            ).map((vehicle: Vehicle) => (
              <div className={styles.vehicleContainer} key={vehicle.id}>
                <VehicleListItem vehicle={vehicle} />
              </div>
            ))}
      </div>
      <div className={styles["btn-container"]}>
        <button
          className={
            showAll || vehicles.length <= 4
              ? styles["arrow-up"]
              : styles["arrow-down"]
          }
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
}
