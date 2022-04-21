import React from 'react';
import "./Auth.scss";
import {Button} from "../../ui";
import {useHistory} from "react-router-dom";
import {SIGN_IN_ROUTE, SIGN_UP_ROUTE} from "../../routes/consts";

const Auth = () => {
    const {push} = useHistory()
    return (
        <section className={"auth"}>
            <h1 className={"auth__title"}>
                Свайп вправо
            </h1>
            <div className={"auth__btns"}>
                <Button
                    className={"btn--pill btn--white"}
                    text={"Создать аккаунт"}
                    onClick={() => push(SIGN_UP_ROUTE)}
                />
                <Button
                    className={"btn--pill btn--outline-white"}
                    text={"Войдите"}
                    onClick={() => push(SIGN_IN_ROUTE)}
                />
            </div>
        </section>
    );
};

export default Auth;