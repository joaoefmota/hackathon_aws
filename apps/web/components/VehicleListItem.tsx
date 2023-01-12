import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../pages/home.module.scss";

export interface VehicleListItemProps {
  vehicle: Vehicle;
}

// Contains header image of car
// Contains clickable link on its bottom
export default function VehicleListItem({ vehicle }: VehicleListItemProps) {
  return (
    <Link href={`vehicles/${vehicle.id}`}>
      <div className={styles["cars-container-individual"]}>
        <h2 className={styles["cars-container-individual-title"]}>
          {vehicle.brand}
        </h2>
        <Image
          alt="alt my ass"
          src={`http://localhost:5000${vehicle.image_main}`}
          width={256}
          height={256}
        />
        <p>{vehicle.rental_price}</p>
      </div>
    </Link>
  );
}
