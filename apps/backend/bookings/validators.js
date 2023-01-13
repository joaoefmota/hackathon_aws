const formValidators = (req, res, next) => {
  const { lastname, name, email, phone_number } = req.body;
  const errors = [];
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const nameRegex = /^[a-zA-Z\s-']+$/;
  const phoneRegex = /^[\d-\s]*\d+[\d-\s]*$/;

  // first name validation
  if (lastname == null || lastname.trim() === "") {
    errors.push({ field: "lastname", message: "⚠ this field is required" });
  } else if (lastname.length >= 50) {
    errors.push({
      field: "lastname",
      message: "⚠ this field should contain less than 50 characters",
    });
  } else if (!nameRegex.test(lastname)) {
    errors.push({
      field: "lastname",
      message:
        "⚠ this field should contain only letters, spaces, hyphens, and apostrophes",
    });
  }

  // last name validation
  if (name == null || name.trim() === "") {
    errors.push({ field: "name", message: "⚠ this field is required" });
  } else if (name.length >= 50) {
    errors.push({
      field: "name",
      message: "⚠ this field should contain less than 50 characters",
    });
  } else if (!nameRegex.test(name)) {
    errors.push({
      field: "name",
      message:
        "⚠ this field should contain only letters, spaces, hyphens, and apostrophes",
    });
  }
  // email validation
  if (email == null || email.trim() === "") {
    errors.push({ field: "email", message: "⚠ this field is required" });
  } else if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "⚠ Invalid email" });
  }
  // message validation
  if (phone_number == null || phone_number.trim() === "") {
    errors.push({ field: "phone_number", message: "⚠ this field is required" });
  } else if (!phoneRegex.test(phone_number)) {
    errors.push({
      field: "phone_number",
      message: "⚠ this field should containe only digits",
    });
  }
  if (errors.length) {
    // if there are erorrs send 422 status, if not - proceed to next step
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = {
  formValidators,
};
