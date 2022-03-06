import Validator from "validator";
import isEmpty from "./isempty.js";

const validateProfile = (data) => {
  let errors = {};

  data.about = !isEmpty(data.about) ? data.about : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  data.socialMedia.facebook = !isEmpty(data.socialMedia.facebook) ? data.socialMedia.facebook : "";
  data.socialMedia.instagram = !isEmpty(data.socialMedia.instagram) ? data.socialMedia.instagram : "";

  if (Validator.isEmpty(data.about)) {
    errors.about = "About Feild is Required ";
  }

  if (!Validator.isEmpty(data.about)) {
    if (!Validator.isLength(data.about, { min: 10, max: 500 })) {
      errors.about = "About must be more than 10 characters";
    }
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address Feild is Required ";
  }

  if (!Validator.isEmpty(data.address)) {
    if (!Validator.isLength(data.address, { min: 5, max: 100 })) {
      errors.address = "Address must be between 5 to 50 characters";
    }
  }
  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "mobile Feild is Required ";
  }

  if (!Validator.isEmpty(data.mobile)) {
    if (!Validator.isLength(data.mobile, { min: 10, max: 10 })) {
      errors.mobile = "Not a valid Mobile number";
    }
  }
  if (!Validator.isEmpty(data.socialMedia.instagram)) {
    if (!Validator.isURL(data.socialMedia.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }
  if (!Validator.isEmpty(data.socialMedia.facebook)) {
    if (!Validator.isURL(data.socialMedia.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateProfile;
