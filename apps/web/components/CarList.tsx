import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import CarContext from "../contexts/CarContext";

import secondPage from "./carList.module.scss";

function CarList() {
  const { contents, secondImage } = useContext(CarContext);
  const [formOpenned, setFormOpenned] = useState<boolean>(false);
  // useState to control the input fields of contact form
  const [inputFields, setInputFields] = useState({
    lastname: " ",
    name: " ",
    email: " ",
    phone_number: " ",
  });

  // useState to control the form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // useState to display erorrs messages in the form if the input value is invalid
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // handler to open the form
  const handleOpenForm = () => {
    setFormOpenned(!formOpenned);
  };
  // handler to listen to user input changes
  const handleInputFields = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputFields((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // axios post route to parse data from input fields in to DB and throw errors into contact form
  //if the input is invalid
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log("Sending");

    axios
      .post("http://localhost:5000/api/bookings", inputFields, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
      //if information provided by user is valid proceed to submit
      .then((res) => {
        console.log("Response received");
        if (res.status === 201) {
          console.log("Response succeeded!");
          setIsSubmitted(true);
          setInputFields({
            lastname: " ",
            name: " ",
            email: " ",
            phone_number: " ",
          });
        }
      })
      // if information provided by user is invalid throw an error in the contact form
      .catch((error) => {
        if (error.response.status === 422) {
          console.log(error.response);
          const serverErrors = error.response.data.validationErrors;
          const errors = {} as { [key: string]: string };

          serverErrors.forEach((error: { field: string; message: string }) => {
            errors[error.field] = error.message;
          });
          setErrors(errors);
          setIsSubmitted(false);
        }
      });
  };

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
            width={220}
            height={180}
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
          <div className={secondPage["btn-text-container"]}>
            <h3 className={secondPage["global-text"]}>
              {contents.rental_price}
            </h3>
            <button onClick={handleOpenForm} className={secondPage["btn"]}>
              Rent
            </button>
          </div>

          {formOpenned && (
            <div className={secondPage["form"]}>
              <h3 className={secondPage["form-text"]}>
                Please fill out the form below
              </h3>
              <form className={secondPage["form-input-fields"]}>
                <div className={secondPage["fullname-container"]}>
                  <div className={secondPage["last-name"]}>
                    <label htmlFor="first-name">Last name*</label>
                    <input
                      onChange={handleInputFields}
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={inputFields.lastname}
                    />
                    {errors.lastname && !isSubmitted && (
                      <p className={secondPage["validation-errors"]}>
                        {errors.lastname}
                      </p>
                    )}
                  </div>
                  <div className={secondPage["first-name"]}>
                    <label htmlFor="first-name">First name*</label>
                    <input
                      onChange={handleInputFields}
                      id="name"
                      name="name"
                      type="text"
                      value={inputFields.name}
                    />
                    {errors.name && !isSubmitted && (
                      <p className={secondPage["validation-errors"]}>
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>
                <label htmlFor="email">Email*</label>
                <input
                  onChange={handleInputFields}
                  id="email"
                  name="email"
                  type="text"
                  value={inputFields.email}
                />
                {errors.email && !isSubmitted && (
                  <p className={secondPage["validation-errors"]}>
                    {errors.email}
                  </p>
                )}
                <label htmlFor="number">Phone number*</label>
                <input
                  onChange={handleInputFields}
                  className={secondPage["message-box"]}
                  id="phone_number"
                  name="phone_number"
                  type="text"
                  value={inputFields.phone_number}
                />
                {errors.phone_number && !isSubmitted && (
                  <p className={secondPage["validation-errors"]}>
                    {errors.phone_number}
                  </p>
                )}
                <div className={secondPage["submit-button-container"]}>
                  <button className={secondPage["btn"]} onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
                {isSubmitted && (
                  <div className={secondPage["submit-text"]}>
                    <p>
                      Your form was submitted ✔
                      <br />
                      Confirmation email will be sent shortly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CarList;
