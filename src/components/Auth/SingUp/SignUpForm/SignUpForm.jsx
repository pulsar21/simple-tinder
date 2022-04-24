import React from 'react';
import {Button, Input, ValidationError} from "../../../../ui";
import classNames from "classnames";
import {ErrorMessage} from "@hookform/error-message";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import "./SignUpForm.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "../../../../utils/schemas";
import {useSignUp} from "../../../../hooks";
import Select from 'react-select';

const SignUpForm = ({next}) => {
    const {setValues} = useSignUp();
    const {goBack} = useHistory()
    const {handleSubmit, formState, register, setValue} = useForm({resolver: yupResolver(signUpSchema), mode: "onBlur"})
    const {errors} = formState;

    const options = [
        { value: 'male', label: 'Мужчина' },
        { value: 'female', label: 'Женщина' }
    ];
    console.log(errors);
    const onSubmit = async (data) => {
        setValues(data);
        next();
    }
    return (
        <div className={"signUpForm"}>
            <h2 className={"signUpForm__title"}>
                Регистрация
            </h2>
            <form className={"signUpForm__form"} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input
                        className={classNames("input--white input--pill", {"input--error": errors.name})}
                        label={"Имя"}
                        placeholder={"Введите имя"}
                        {...register("name", {required: true})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => <ValidationError message={message}/>}
                    />
                </div>
                <div>
                    <Input
                        className={classNames("input--white input--pill", {"input--error": errors.age})}
                        type={"number"}
                        label={"Возраст"}
                        placeholder={"Введите возраст"}
                        {...register("age", {required: true, min: 18, max: 100})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="age"
                        render={({ message }) => <ValidationError message={message}/>}
                    />
                </div>
                <div>
                    <Input
                        className={classNames("input--white input--pill", {"input--error": errors.email})}
                        label={"Почта"}
                        placeholder={"Введите почту"}
                        {...register("email", {required: true})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <ValidationError message={message}/>}
                    />
                </div>
                <div>
                    <div>
                        <p className={"signUpForm__label"}>Пол</p>
                        <Select
                            className={classNames("signUpForm__select select--white", {"signUpForm__error": errors.password})}
                            placeholder={"Выберите пол"}
                            onChange={(e) => setValue("gender", e.value)}
                            options={options}
                        />
                    </div>
                    <ErrorMessage
                        errors={errors}
                        name="gender"
                        render={({ message }) => <ValidationError message={message}/>}
                    />
                </div>
                <div>
                    <Input
                        className={classNames("input--white input--pill", {"input--error": errors.password})}
                        type={"password"}
                        label={"Пароль"}
                        placeholder={"Введите пароль"}
                        {...register("password", {required: true})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ message }) => <ValidationError message={message}/>}
                    />
                </div>
                <div>
                    <Input
                        className={classNames("input--white input--pill", {"input--error": errors.password_confirmation})}
                        type={"password"}
                        label={"Павторите пароль"}
                        placeholder={"Введите павторный пароль"}
                        {...register("password_confirmation", {required: true})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="password_confirmation"
                        render={({ message }) => <ValidationError message={message}/>}
                    />
                </div>
                <div className={"signUpForm__btns"}>
                    <Button
                        className={"btn--pill btn--white"}
                        loaderClassName={"btn-loader--dark"}
                        type={"submit"}
                        text={"Далее"}
                    />
                    <Button
                        className={"btn--pill btn--outline-white"}
                        type={"button"}
                        text={"Назад"}
                        onClick={() => goBack()}
                    />
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;