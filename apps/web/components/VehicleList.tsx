import React from "react";
import VehicleListItem from "./VehicleListItem";

export interface VehicleListProps {
  vehicles: Vehicle[];
}

// This is the list that maps vehicles into a VehicleListItem each
export default function VehicleList({ vehicles }: VehicleListProps) {
  return (
    <div>
      {vehicles.map((vehicle) => (
        <VehicleListItem vehicle={vehicle} />
      ))}
    </div>
  );
}
