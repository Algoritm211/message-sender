import React, {useState, useEffect} from 'react';
import {useFormik} from "formik";
import classes from './FormMessage.module.scss'
import classNames from 'classnames'
import FormInput from "./FormInput/FormInput";
import {stringCutter} from "../../../utils/stringCutter";
import UploadComponent from "./UploadComponent/UploadComponent";
import {validationSchema} from "./ValidationFormMessage";
import {useDispatch} from "react-redux";
import {addNewMessage} from "../../../redux/sendForm-reducer";

const FormMessage = () => {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      firstNameFrom: '',
      firstNameTo: '',
      emailFrom: '',
      emailTo: '',
      emailTopic: '',
      message: '',
      files: [],
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(addNewMessage(values))
    },
  });

  const onDeleteFile = (path) => {
    const filteredFilesWithoutDelete = formik.values.files.filter(file => {
      return file.path !== path
    })
    formik.setFieldValue('files', filteredFilesWithoutDelete)
  }

  return (
    <div>
      <h2>Messages Sender</h2>
      <form onSubmit={formik.handleSubmit} className={classes.formMessage}>
        От кого
        <div className={classNames(classes.fromToInputs)}>
          <FormInput
            name="firstNameFrom"
            placeholder={'Имя'}
            formik={formik}
          />
          <FormInput
            name="emailFrom"
            placeholder={'Email'}
            formik={formik}
          />
        </div>
        Кому
        <div className={classes.fromToInputs}>
          <FormInput
            name="firstNameTo"
            placeholder={'Имя'}
            formik={formik}
          />
          <FormInput
            name="emailTo"
            placeholder={'Email'}
            formik={formik}
          />
        </div>
        Тема письма
        <div className={classes.formLetterTheme}>
          <FormInput
            name="emailTopic"
            placeholder={'Тема письма'}
            formik={formik}
          />
        </div>
        Сообщение
        <div className={classes.textAreaBlock}>
          <textarea
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>

        <div className={classes.fileList}>
          {formik.values.files
          &&
          formik.values.files.map((file, index) => {
            return <FileBlock file={file} key={index} onDelete={() => onDeleteFile(file.path)}/>
          })
          }
        </div>

        <UploadComponent setFieldValue={formik.setFieldValue}/>
        <button
          type="submit"
          className={classes.submitButton}
        >Отправить
        </button>
      </form>
    </div>
  );
};

export default FormMessage;


const FileBlock = (props) => {

  return (
    <div className={classes.fileBlock}>
      <div>
        <i className="fas fa-paperclip"></i>
      </div>
      <div>
        {stringCutter(props.file.name, 15)}
      </div>
      <div className={classes.deleteButton} onClick={props.onDelete}>
        <i className="fas fa-trash"></i> Удалить
      </div>
    </div>
  )
}