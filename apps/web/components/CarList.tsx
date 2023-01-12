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
          <h3 className={secondPage["global-text"]}>{contents.brand}</h3>
          <Image
            className={secondPage["car-image"]}
            src={secondImage}
            alt="Vehicle Second"
            width={200}
            height={150}
          />
          <p className={secondPage["global-text"]}>Specifications</p>
        </div>
      )}
    </div>
  );
}

export default CarList;
