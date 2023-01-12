import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../pages/home.module.scss";
import { useRouter } from "next/router";

export interface VehicleListItemProps {
  vehicle: Vehicle;
}

// Contains header image of car
// Contains clickable link on its bottom

export default function VehicleListItem({ vehicle }: VehicleListItemProps) {
  const router = useRouter();
  const handleChange = () => {
    router.push(`vehicles/${vehicle.id}`);
  };
  return (
    <Link
      href={`vehicles/${vehicle.id}`}
      className={styles["cars-container-individual"]}
    >
      <div className={styles["cars-container-individual-div"]}>
        <Image
          alt="alt my ass"
          src={`http://localhost:5000${vehicle.image_main}`}
          width={500}
          height={500}
        />
        <div className={styles["text-and-button"]}>
          <div className={styles["cars-container-individual-div-text"]}>
            <h2>{vehicle.brand}</h2>
            <p>{vehicle.yearcar}</p>
          </div>
          <button
            type="button"
            onClick={handleChange}
            className={styles.buttonStyle}
          />
        </div>
      </div>
    </Link>
  );
}
