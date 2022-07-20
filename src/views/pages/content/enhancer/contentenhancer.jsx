import { withFormik } from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Please Enter Name")
      .matches(/^[a-zA-Z ]*$/, "Please Enter valid Name"),
    company: Yup.string()
      .required("Please Enter Company Name")
      .matches(/^[a-zA-Z ]*$/, "Please Enter valid Company Name"),
    mobile_no: Yup.string()
      .matches(/^[0-9]*$/, "Please Enter valid mobile number")
      .min(9, "Mobile Number must be at least 9 digits")
      .max(10, "Mobile Number must be at most 10 digits")
      .required("Please Enter Mobile Number"),
    delivery_postcode: Yup.string()
      .matches(/^[0-9]*$/, "Please Enter valid  delivery postcode")
      .min(4, "Delivery Postcode must be at least 4 digits")
      .max(4, "Delivery Postcode must be at most 4 digits")
      .required("Please Enter Delivery Postcode"),
    email: Yup.string()
      .required("Please Enter Email")
      .email(),
  }),
  validateOnMount: true,
  mapPropsToValues: (props) => ({
    name: "",
    company: "",
    mobile_no: "",
    delivery_postcode: "",
    email: "",
  }),
  handleSubmit: (values) => {},
  displayName: "CustomValidationForm",
  enableReinitialize: true,
});

export default formikEnhancer;
