import React, {useRef} from "react";
import classes from "../FormMessage.module.scss";

const FormInput = ({name, placeholder, formik}) => {

  const refDiv = useRef()

  if (formik.errors[name] && formik.touched[name]) {
    refDiv.current?.parentNode.classList.add(classes.errorContainer)
  } else if (!formik.errors[name]) {
    refDiv.current?.parentNode.classList.remove(classes.errorContainer)
  }

  return (
    <React.Fragment>
      <div ref={refDiv}>
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={formik.handleChange}
          value={formik.values[name]}
          onBlur={formik.handleBlur}
        />
        {formik.touched[name]
        &&
        formik.errors[name]
        &&
        <span className={classes.error}>{formik.errors[name]}</span>
        }
      </div>

    </React.Fragment>
  )
}
export default FormInput