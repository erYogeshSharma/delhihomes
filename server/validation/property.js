import Validator from "validator";
import isEmpty from "./isempty.js";

const validateProperty = (data) => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.zip = !isEmpty(data.zip) ? data.zip : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.propertyType = !isEmpty(data.propertyType) ? data.propertyType : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  //Title
  if (!Validator.isLength(data.title, { min: 5, max: 30 })) {
    errors.title = "title must be between 5 and 30 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "title is required";
  }

  //Price
  if (Validator.isEmpty(data.price)) {
    errors.price = "price is required";
  } else {
    if (isNaN(data.price)) {
      errors.price = "only numbers";
    } else {
      if (!Validator.isLength(data.price, { min: 2, max: 10 })) {
        errors.price = "double digit";
      }
    }
  }

  // Description
  if (!Validator.isLength(data.description, { min: 15, max: 300 })) {
    errors.description = "description must be between 15 and 300 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "description is required";
  }

  //Address
  if (!Validator.isLength(data.address, { min: 5, max: 50 })) {
    errors.address = "address must be between 5 and 50 characters";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "address is required";
  }

  //zip
  if (Validator.isEmpty(data.zip)) {
    errors.zip = "zip is required";
  }

  //State
  if (!Validator.isLength(data.state, { min: 2, max: 30 })) {
    errors.state = "state must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "state is required";
  }

  //City
  if (!Validator.isLength(data.city, { min: 2, max: 30 })) {
    errors.city = "city must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "city is required";
  }

  //Property Type
  if (Validator.isEmpty(data.propertyType)) {
    errors.propertyType = "Please select a property type";
  }

  //Property Status
  if (Validator.isEmpty(data.status)) {
    errors.status = "Please select a property status";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateProperty;
