import * as yup from "yup";

const signInSchema = yup.object({
    email: yup.string().email("Неверный формат электронной почты").required("Обязательное поле"),
    password: yup.string().required("Обязательное поле").min(8, "Должно быть больше 8 символа").max(20, "Должно быть меньше 20 символа"),
});

const signUpSchema = yup.object({
    name: yup.string().required("Обязательное поле"),
    age: yup.string().required("Обязательное поле"),
    email: yup.string().email("Неверный формат электронной почты").required("Обязательное поле"),
    gender: yup.string().required("Обязательное поле"),
    password: yup.string().required("Обязательное поле").min(8, "Должно быть больше 8 символа").max(20, "Должно быть меньше 20 символа"),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], "Павторный пароль должен савподать").min(8, "Должно быть больше 8 символа").max(20, "Должно быть меньше 20 символа").required("Обязательное поле")
})

const profileSchema = yup.object({
    name: yup.string().required("Обязательное поле"),
    email: yup.string().email("Неверный формат электронной почты").required("Обязательное поле"),
    age: yup.string().required("Обязательное поле"),
});

const imageSchema = yup.object({
    image: yup.mixed().required("Обязательное поле")
});


export {
    signInSchema, profileSchema, signUpSchema, imageSchema
};