import "./MessageId.scss";
import {Avatar, Button, Icon, TextArea} from "../../../ui";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {MessengerDefault} from "../../../components";

const MessageId = () => {
    const {goBack} = useHistory()
    const [message, setMessage] = useState("");
    return (
        <section className={"messageId"}>
            <div className={"messageId__header"}>
                <Icon name={"back-red"} handleClick={() => goBack()}/>
                <div className={"messageId__avatar"}>
                    <Avatar
                        width={28}
                        height={28}
                        name={"/assets/img/test.jpg"}
                    />
                    <h5 className={"messageId__name"}>
                        Le
                    </h5>
                </div>
                <Icon
                    className={"messageId__more"}
                    name={"more"}
                />
            </div>
            <MessengerDefault/>
            <div className={"messageId__message"}>
                <TextArea
                    className={"input--message"}
                    placeholder={"Введите сообщение"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className={"messageId__btn"}>
                    <Button
                        className={"btn--default btn--red-text"}
                        text={"Отправить"}
                        disabled={message.length === 0}
                    />
                </div>
            </div>
        </section>
    );
};

export default MessageId;