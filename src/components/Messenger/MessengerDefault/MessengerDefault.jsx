import "./MessengerDefault.scss";
import {Avatar} from "../../../ui";
import React from "react";
import {findImage} from "../../../utils/functions";
import moment from "moment";

const MessengerDefault = ({member}) => {
    return (
        <div className={"messengerDefault"}>
            <h3 className={"messengerDefault__title"}>
                Вы и <span>{member.name}</span> образовали пару
            </h3>
            <p className={"messengerDefault__desc"}>
                {moment(member.updated_at).startOf('hour').fromNow()}
            </p>
            <Avatar
                className={"messengerDefault__avatar"}
                width={200}
                height={200}
                name={member.image ? findImage(member.image) : "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"}
            />
        </div>
    );
};

export default MessengerDefault;