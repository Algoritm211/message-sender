import React from 'react';
import classes from './FormBlock.module.scss'
import FormMessage from "./FormMessage/FormMessage";
import {useSelector} from "react-redux";
import {getIsLoading} from "../../redux/sendForm-selector";
import LoadingScreen from "./LoadingScreen/LoadingScreen";

const FormBlock = () => {

  const isLoading = useSelector(getIsLoading)

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <div id={'dropzone'} className={classes.formBlock}>
      <FormMessage />
    </div>
  );
};

export default FormBlock;