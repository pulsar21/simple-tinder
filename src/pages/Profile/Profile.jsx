import React from 'react';
import {Avatar, Icon, Input} from "../../ui";
import "./Profile.scss"
import {ProfileSettings} from "../../components";
import {useHistory} from "react-router-dom";

const Profile = () => {
    const {goBack} = useHistory()
    return (
        <section className={"profile"}>
            <div className={"profile__header"}>
                <Icon
                    className={"profile__icon"}
                    name={"back"}
                    handleClick={() => goBack()}
                />
                <h3 className={"profile__title"}>
                    Профиль
                </h3>
            </div>
            <Avatar
                className={"profile__avatar"}
                width={200}
                height={200}
                name={"/assets/img/test.jpg"}
            />
            <h1 className={"profile__name"}>
                Zhaslan, 22
            </h1>
            <ProfileSettings/>
        </section>
    );
};

export default Profile;