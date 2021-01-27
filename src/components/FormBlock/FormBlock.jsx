import React from 'react';
import classes from './FormBlock.module.scss'
import FormMessage from "./FormMessage/FormMessage";

const FormBlock = () => {
  return (
    <div className={classes.formBlock}>
      <FormMessage />
    </div>
  );
};

export default FormBlock;