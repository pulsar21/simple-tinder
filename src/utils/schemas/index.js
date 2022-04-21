import * as yup from "yup";

const signInSchema = yup.object({
    email: yup.string().email("Неверный формат электронной почты").required("Обязательное поле"),
    password: yup.string().required("Обязательное поле").min(8, "Должно быть больше 8 символа").max(20, "Должно быть меньше 20 символа"),
});

export {
    signInSchema
};