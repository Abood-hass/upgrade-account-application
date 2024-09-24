import * as Yup from "yup";

const formInitialValues = {
  firstLastName: "",
  emailAddress: "",
  phoneNumber: "",
  education: "",
  city: "",
  companyName: "",
  addressLine: "",
  state: "",
  zip: "",
  companyNumber: "",
  country: "",
};


const formSchema = () =>
  Yup.object().shape({
    // First name and last name
    firstLastName: Yup.string()
      .min(2, "First name and last name must be at least 2 characters") // too short
      .max(120, "First name and last name is too long") // too long
      .required("First name and last name is required"), // required

    // Email address
    emailAddress: Yup.string()
      .email("Invalid email address", "Please enter a valid email address") // invalid email
      .required("Email address is required"), // required

    // Phone number
    phoneNumber: Yup.number()
      .positive("Phone number must be a positive number") // negative number
      .integer("Phone number must be an integer") // non-integer
      .required("Phone number is required"), // required

    // Education
    education: Yup.string().required("Education is required"), // required

    // City
    city: Yup.string().required("City is required"), // required

    // Company Name
    companyName: Yup.string()
      .min(2, "Company name must be at least 2 characters") // too short
      .max(120, "Company name is too long") // too long
      .required("Company name is required"), // required

    // Address Line
    addressLine: Yup.string()
      .min(2, "Address line must be at least 2 characters") // too short
      .max(120, "Address line is too long") // too long
      .required("Address line is required"), // required

    // State/Province/Region
    state: Yup.string()
      .min(2, "State/Province/Region must be at least 2 characters") // too short
      .max(120, "State/Province/Region is too long") // too long
      .required("State/Province/Region is required"), // required

    // Zip/Portal Code
    zip: Yup.string()
      .min(2, "Zip/Portal code must be at least 2 characters") // too short
      .max(120, "Zip/Portal code is too long") // too long
      .required("Zip/Portal code is required"), // required

    // Company Number
    companyNumber: Yup.number()
      .positive("Company number must be a positive number") // negative number
      .integer("Company number must be an integer") // non-integer
      .required("Company number is required"), // required

    // Country
    country: Yup.string()
      .min(2, "Country must be at least 2 characters") // too short
      .max(120, "Country is too long") // too long
      .required("Country is required"), // required
  });

export { formInitialValues };
export default formSchema;
