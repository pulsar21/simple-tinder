import "./ProfileSettings.scss";
import {Button, Input, List, ValidationError} from "../../../ui";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {ACCESS_TOKEN} from "../../../consts";
import {AUTH_ROUTE} from "../../../routes/consts";
import {yupResolver} from "@hookform/resolvers/yup";
import {profileSchema} from "../../../utils/schemas";
import {ErrorMessage} from "@hookform/error-message";
import {AuthService} from "../../../services";

const ProfileSettings = ({user}) => {
    const [profile, setProfile] = useState(user ?? {});
    const {handleSubmit, formState, register} = useForm({resolver: yupResolver(profileSchema), mode: "onBlur"});

    const {errors} = formState;

    const fields = [
        {id: 1, name: "name", label: "Имя", placeholder: "Введите", value: profile.name},
        {id: 2, name: "email", label: "Почта", placeholder: "Введите", value: profile.email},
        {id: 3, name: "age", label: "Возраст", placeholder: "Введите", value: profile.age},
    ]

    const {updateProfile} = AuthService;

    const onSubmit = async (data) => {
        setProfile(prev => ({...prev, ...data}));
        await updateProfile(data, user.id);
    };

    const onLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.href = AUTH_ROUTE;
    };
    return (
        <form className={"profileSettings"} onSubmit={handleSubmit(onSubmit)}>
            <List
                className={"profileSettings__list"}
                items={fields}
                renderItem={(field) => (
                    <li key={field.id} className={"profileSettings__item"}>
                        <Input
                            type={field.type}
                            label={field.label}
                            placeholder={field.placeholder}
                            {...register(field.name, {value: field.value})}
                        />
                        <ErrorMessage
                            errors={errors}
                            name={field.name}
                            render={({ message }) => <ValidationError message={message}/>}
                        />
                    </li>
                )}
            />
            <div className={"profileSettings__btns"}>
                <Button
                    type={"submit"}
                    className={"btn--default"}
                    text={"Сохранить"}
                />
                <Button
                    type={"button"}
                    className={"btn--default btn--red-text"}
                    text={"Выйти"}
                    onClick={onLogout}
                />
            </div>
        </form>
    );
};

export default ProfileSettings;