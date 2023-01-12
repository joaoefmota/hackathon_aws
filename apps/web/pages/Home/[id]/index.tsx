import * as React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SingleVehicle = () => {
  const router = useRouter();
  const { id } = router.query;

  const [contents, setContents] = useState("");

  useEffect(() => {
    if (id == null) return;
    axios
      .get(`http://localhost:5000/api/vehicles/${id}`)
      .then((response) => response.data)
      .then((result) => setContents(result[0]) & console.log(result[0]));
  }, [id]);

  return <>{contents == null ? <p>Loading...</p> : <p>Do the thing</p>}</>;
};

export default SingleVehicle;
