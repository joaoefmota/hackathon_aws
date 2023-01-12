import * as React from "react";
import { useEffect, useState } from "react";
import styles from "../Home/home.module.scss";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/vehicles`)
      .then((response) => response.data)
      .then((result) => {
        setContents(result);
        console.log(result);
      });
  }, []);

  const apiUrl = "http://localhost:5000";
  const mainImage = contents.image_main
    ? apiUrl.concat(contents.image_main)
    : undefined;
  const secondImage = contents.image_second
    ? apiUrl.concat(contents.image_second)
    : undefined;

  return (
    <>
      {/*Header*/}
      <div className={styles["test"]}>
        <button>Log In</button>
        <button>Register</button>
        <button></button>
      </div>
      <div className={styles["cars-container"]}>
        {contents == null ? (
          <p>Loading...</p>
        ) : (
          <>
            {contents.map((car) => (
              <Link href={`home/${car.id}`}>
                <div className={styles["cars-container-individual"]}>
                  <h2 className={styles["cars-container-individual-title"]}>
                    {car.brand}
                  </h2>
                  <Image
                    src={`http://localhost:5000${car.image_main}`}
                    width={256}
                    height={256}
                  />
                  <p>{car.rental_price}</p>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default Home;
