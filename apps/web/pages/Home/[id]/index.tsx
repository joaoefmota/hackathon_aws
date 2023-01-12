import * as React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const SingleVehicle = () => {
  const router = useRouter();
  const { id } = router.query;

  const [contents, setContents] = useState("");

  useEffect(() => {
    if (id == null) return;
    axios
      .get(`http://localhost:5000/api/vehicles/${id}`)
      .then((response) => response.data)
      .then((result) => {
        setContents(result[0]);
        console.log(result[0]);
      });
  }, [id]);

  const apiUrl = "http://localhost:5000";
  const mainImage = contents.image_main
    ? apiUrl.concat(contents.image_main)
    : undefined;
  const secondImage = contents.image_second
    ? apiUrl.concat(contents.image_second)
    : undefined;

  return (
    <>
      {contents == null ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Do the thing</p>
          <Image src={mainImage} alt="Vehicle Main" width={256} height={256} />
          <Image
            src={secondImage}
            alt="Vehicle Main"
            width={256}
            height={256}
          />
        </>
      )}
    </>
  );
};

export default SingleVehicle;
