import { withFormik } from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    marker: Yup.string()
      .required("Please Enter The type of Marker")
      .max(50)

    
  }),
  validateOnMount: true,
  mapPropsToValues: props => ({
    marker: ""
  }),
  handleSubmit: values => {},
  displayName: "CustomValidationForm",
  enableReinitialize: true
});

export default formikEnhancer;