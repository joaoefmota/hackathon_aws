import React from "react";
import VehicleListItem from "./VehicleListItem";
import styles from "./vehicleList.module.scss";

export interface VehicleListProps {
  vehicles: Vehicle[];
}

// This is the list that maps vehicles into a VehicleListItem each
export default function VehicleList({ vehicles }: VehicleListProps) {
  return (
    <div className={styles.vehicleContainer} >
      {vehicles.map((vehicle) => (
        <VehicleListItem vehicle={vehicle} />
      ))}
    </div>
  );
}
