import "./MessengerDefault.scss";
import {Avatar} from "../../../ui";
import React from "react";

const MessengerDefault = () => {
    return (
        <div className={"messengerDefault"}>
            <h3 className={"messengerDefault__title"}>
                Вы и <span>Le</span> образовали пару
            </h3>
            <p className={"messengerDefault__desc"}>
                2 недели назад
            </p>
            <Avatar
                className={"messengerDefault__avatar"}
                width={200}
                height={200}
                name={"/assets/img/test.jpg"}
            />
        </div>
    );
};

export default MessengerDefault;