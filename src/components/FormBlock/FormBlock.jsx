import React, {useEffect, useState} from 'react';
import classes from './FormBlock.module.scss'
import FormMessage from "./FormMessage/FormMessage";

const FormBlock = () => {


  return (
    <div id={'dropzone'} className={classes.formBlock}>
      <FormMessage />
    </div>
  );
};

export default FormBlock;