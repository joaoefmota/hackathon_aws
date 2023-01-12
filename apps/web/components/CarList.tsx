import React, { useContext } from "react";
import Image from "next/image";

import CarContext from "../contexts/CarContext";

function CarList() {
  const { contents, mainImage, secondImage } =
    useContext(CarContext);

  return (
    <>
      {contents == null ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Do the thing please</p>
          <h2 className={""}>
            {contents.brand}
          </h2>
          <Image src={mainImage} alt="Vehicle Main" width={256} height={256} />
          <Image
            src={secondImage}
            alt="Vehicle Second"
            width={256}
            height={256}
          />
        </>
      )}
    </>
  );
}

export default CarList;
