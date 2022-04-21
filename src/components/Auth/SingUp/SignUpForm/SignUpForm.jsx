import React from 'react';
import {Button, Input, ValidationError} from "../../../../ui";
import classNames from "classnames";
import {ErrorMessage} from "@hookform/error-message";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import "./SignUpForm.scss";

const SignUpForm = () => {
    const {goBack} = useHistory()
    const {handleSubmit, formState, register} = useForm()
    const {errors, isSubmitting} = formState;

    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div className={"signUpForm"}>
            <h2 className={"signUpForm__title"}>
                Регистрация
            </h2>
            <form className={"signUpForm__form"} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input
                        className={classNames("input--white input--pill", {"input--error": errors.email})}
                        label={"Имя"}
                        placeholder={"Введите имя"}
                        autoComplete={"off"}
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
                        className={classNames("input--white input--pill", {"input--error": errors.email})}
                        type={"number"}
                        label={"Возраст"}
                        placeholder={"Введите возраст"}
                        autoComplete={"off"}
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
                        autoComplete={"off"}
                        {...register("email", {required: true})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <ValidationError message={message}/>}
                    />
                </div>
                <div>
                    <Input
                        className={classNames("input--white input--pill", {"input--error": errors.password})}
                        type={"password"}
                        label={"Пароль"}
                        placeholder={"Введите пароль"}
                        autoComplete={"off"}
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
                        className={classNames("input--white input--pill", {"input--error": errors.password})}
                        type={"password"}
                        label={"Павторите пароль"}
                        placeholder={"Введите павторный пароль"}
                        autoComplete={"off"}
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
                        text={"Зарегистрироваться"}
                        loading={isSubmitting}
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