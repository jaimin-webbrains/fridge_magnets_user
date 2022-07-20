import { withFormik } from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Please Enter Name")
      .matches(/^[a-zA-Z ]*$/, "Please Enter valid Name"),
    email: Yup.string()
      .required("Please Enter Email")
      .email(),
    mobile: Yup.string()
      .matches(/^[0-9]*$/, "Please Enter valid mobile number")
      .min(9, "Mobile Number must be at least 9 digits")
      .max(10, "Mobile Number must be at most 10 digits")
      .required("Please Enter Mobile Number"),
    messages: Yup.string().required("Please Enter Name"),
    // .matches(/^[a-zA-Z ]*$/, "Please Enter valid Name"),
  }),
  validateOnMount: true,
  mapPropsToValues: (props) => ({
    name: "",
    email: "",
    mobile: "",
    messages: "",
  }),
  handleSubmit: (values) => {},
  displayName: "CustomValidationForm",
  enableReinitialize: true,
});

export default formikEnhancer;
