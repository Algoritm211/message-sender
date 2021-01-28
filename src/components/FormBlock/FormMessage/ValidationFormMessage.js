import * as yup from "yup";

export const validationSchema = yup.object({
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