import React, {useState} from 'react';
import {useSignUp} from "../../../../hooks";
import "./SignUpConfirm.scss";
import {useForm} from "react-hook-form";
import {Button, Icon, List, Tag} from "../../../../ui";
import classNames from "classnames";
import {AuthService} from "../../../../services";
import {ACCESS_TOKEN} from "../../../../consts";
import {HOME_ROUTE} from "../../../../routes/consts";

const SignUpConfirm = ({previous, tags, setTags}) => {
    const {data} = useSignUp();
    const {handleSubmit, formState} = useForm()
    const {isSubmitting} = formState;

    const {signUp} = AuthService;
    const onSubmit = async () => {
        const filterTags = tags.filter((tag) => tag.isActive).map((tag) => tag.id);
        const formData = new FormData();
        formData.append("image", data.image);
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("gender", data.gender);
        formData.append("age", data.age);
        formData.append("password", data.password);
        formData.append("password_confirmation", data.password_confirmation);
        for (const tag of filterTags) {
            formData.append("tag_ids[]", tag);
        }
        const res = await signUp(formData)
        if (res) {
            localStorage.setItem(ACCESS_TOKEN, res.token);
            window.location.href = HOME_ROUTE;
        }
    };

    const onAddTags = (id) => {
        setTags(prev => prev.map(p => {
            if (p.id === id) {
                p.isActive = !p.isActive
            }
            return p;
        }))
    }
    return (
        <div className={"singUpConfirm"}>
            <Icon
                className={"singUpConfirm__icon"}
                name={"tinder-dark"}
            />
            <h2 className={"singUpConfirm__title"}>
                Регистрация
            </h2>
            <form className={"singUpConfirm__form"} onSubmit={handleSubmit(onSubmit)}>
                <List
                    className={"singUpConfirm__tags"}
                    items={tags}
                    renderItem={(tag) => (
                        <li key={tag.id} className={classNames("singUpConfirm__tag", {active: tag.isActive})} onClick={() => onAddTags(tag.id)}>
                            <Tag text={tag.title}/>
                        </li>
                    )}
                />
                <div className={"singUpConfirm__btns"}>
                    <Button
                        className={"btn--pill btn--dark"}
                        loaderClassName={"btn-loader--white"}
                        type={"submit"}
                        text={"Зарегистрироваться"}
                        loading={isSubmitting}
                        disabled={isSubmitting}
                    />
                    <Button
                        className={"btn--pill btn--outline-dark"}
                        type={"button"}
                        text={"Назад"}
                        onClick={() => previous()}
                    />
                </div>
            </form>
        </div>
    );
};

export default SignUpConfirm;