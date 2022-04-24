import React from 'react';
import {useForm} from "react-hook-form";
import {Button, Input, ValidationError} from "../../../../ui";
import {useHistory} from "react-router-dom";
import {signInSchema} from "../../../../utils/schemas";
import { yupResolver } from '@hookform/resolvers/yup';
import "./SignInForm.scss";
import classNames from "classnames";
import { ErrorMessage } from '@hookform/error-message';
import {AuthService} from "../../../../services";
import {ACCESS_TOKEN} from "../../../../consts";
import {HOME_ROUTE} from "../../../../routes/consts";

const SignInForm = () => {
    const {goBack} = useHistory()
    const {signIn} = AuthService;
    const {
        handleSubmit, register, formState
    } = useForm({resolver: yupResolver(signInSchema), mode: "onBlur"});

    const {errors, isSubmitting} = formState;

    const onSubmit = async (data) => {
        const res = await signIn(data);
        if (res) {
            localStorage.setItem(ACCESS_TOKEN, res.token);
            window.location.href = HOME_ROUTE;
        }
    };
    return (
        <div className={"signInForm"}>
            <h2 className={"signInForm__title"}>
                Авторизация
            </h2>
            <form className={"signInForm__form"} onSubmit={handleSubmit(onSubmit)}>
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
                <div className={"signInForm__btns"}>
                    <Button
                        className={"btn--pill btn--white"}
                        loaderClassName={"btn-loader--dark"}
                        type={"submit"}
                        text={"Авторизоваться"}
                        loading={isSubmitting}
                        disabled={isSubmitting}
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

export default SignInForm;