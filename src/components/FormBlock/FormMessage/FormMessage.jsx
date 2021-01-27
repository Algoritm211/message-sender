import React, {useRef} from 'react';
import {useFormik} from "formik";
import classes from './FormMessage.module.scss'
import * as yup from 'yup'
import classNames from 'classnames'
import FormInput from "./FormInput/FormInput";
import {stringCutter} from "../../../utils/stringCutter";
import UploadComponent from "./UploadComponent/UploadComponent";

const FormMessage = () => {

  const validationSchema = yup.object({
    firstNameFrom: yup
      .string('Введите имя отправителя')
      .required('Это поле обязательно для заполнения'),
    firstNameTo: yup
      .string('Введите имя получателя')
      .required('Это поле обязательно для заполнения'),
    emailFrom: yup
      .string('Введите почту отправителя')
      .email('Введите корректный email-адрес')
      .required('Это поле обязательно для заполнения'),
    emailTo: yup
      .string('Введите почту получателя')
      .email('Введите корректный email-адрес')
      .required('Это поле обязательно для заполнения'),
    emailTopic: yup
      .string('Введите тему письма')
      .required('Это поле обязательно для заполнения'),
    message: yup
      .string('Введите сообщение')
      .required('Это поле обязательно для заполнения'),
  })
  const formik = useFormik({
    initialValues: {
      firstNameFrom: '',
      firstNameTo: '',
      emailFrom: '',
      emailTo: '',
      emailTopic: '',
      message: '',
      files: null,
    },
    // validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


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
            return <FileBlock file={file} key={index}/>
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


const FileBlock = (file) => {


  return (
    <div className={classes.fileBlock}>
      <div>
        <i className="fas fa-paperclip"></i>
      </div>
      <div>
        {stringCutter(file.file.name, 15)}
      </div>
      <div className={classes.deleteButton}>
        <i className="fas fa-trash"></i> Удалить
      </div>
    </div>
  )
}