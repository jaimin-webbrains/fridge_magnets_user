import { withFormik } from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Please Enter name")
      .matches(/^[a-zA-Z ]*$/, "Please enter valid name"),
    company: Yup.string()
      // .required("Please Enter Company name")
      .matches(/^[a-zA-Z ]*$/, "Please enter valid company name"),
    mobile_no: Yup.string()
      .matches(/^[0-9]*$/, "Please enter valid mobile number")
      .min(9, "mobile number must be at least 9 characters")
      .max(10, "mobile number must be at most 10 characters")
      .required("Please Enter Mobile Number"),
    delivery_postcode: Yup.string()
      .matches(/^[0-9]*$/, "Please enter valid  delivery postcode")
      .min(4, "delivery postcode must be at least 4 characters")
      .max(4, "delivery postcode must be at most 4 characters")
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
