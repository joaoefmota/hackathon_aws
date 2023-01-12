import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import CarContext from "../contexts/CarContext";

import secondPage from "./carList.module.scss";

function CarList() {
  const { contents, secondImage } = useContext(CarContext);

  return (
    <div>
      {contents == null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link href={"/"}>
            <div className={secondPage["arrow"]}></div>
          </Link>
          <h2 className={secondPage["global-text"]}>{contents.brand}</h2>
          <Image
            className={secondPage["car-image"]}
            src={secondImage}
            alt="Vehicle Second"
            width={200}
            height={150}
          />
          <h3 className={secondPage["global-text"]}>Specifications</h3>
          <div className={secondPage["specification-grid"]}>
            <div className={secondPage["specification-containers"]}>
              <p>
                Seats:
                <br />
                {contents.seats}
              </p>
            </div>
            <div className={secondPage["specification-containers"]}>
              <p>
                Gear box:
                <br />
                {contents.gear_box}{" "}
              </p>
            </div>
            <div className={secondPage["specification-containers"]}>
              Fuel consumption:
              <br />
              {contents.fuel_consumption}
            </div>
            <div className={secondPage["specification-containers"]}>
              Year:
              <br />
              {contents.yearcar}
            </div>
          </div>
          <h3 className={secondPage["global-text"]}>{contents.rental_price}</h3>
        </div>
      )}
    </div>
  );
}

export default CarList;
