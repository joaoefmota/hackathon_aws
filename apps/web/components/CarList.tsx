import React, { useContext } from "react";
import Image from "next/image";

import CarContext from "../contexts/CarContext";

import secondPage from "./carList.module.scss";

function CarList() {
  const { contents, secondImage } = useContext(CarContext);

  return (
    <div>
      {contents == null ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Do the thing please</p>
          <h2 className={""}>{contents.brand}</h2>
          <Image
            src={secondImage}
            alt="Vehicle Second"
            width={256}
            height={256}
          />
        </>
      )}
    </div>
  );
}

export default CarList;
