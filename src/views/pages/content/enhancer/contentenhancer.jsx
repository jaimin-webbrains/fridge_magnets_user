import { withFormik } from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please Enter name"),
    company: Yup.string().required("Please Enter Company name"),
    mobile_no: Yup.string()
      .required("Please Enter Mobile Number")
      .min(10)
      .max(10),
    delivery_postcode: Yup.string().required("Please Enter Delivery Postcode"),
    email: Yup.string().email(),
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
