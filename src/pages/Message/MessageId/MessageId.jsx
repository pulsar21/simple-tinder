import "./MessageId.scss";
import {Avatar, Button, Icon, TextArea} from "../../../ui";
import {useHistory, useLocation, useRouteMatch} from "react-router-dom";
import {useEffect, useState} from "react";
import {MessengerDefault} from "../../../components";
import {MemberService} from "../../../services";
import {findImage} from "../../../utils/functions";

const MessageId = () => {
    const {goBack} = useHistory();
    const location = useLocation();
    const routeMatch = useRouteMatch();
    const [message, setMessage] = useState("");
    const [member, setMember] = useState(null);
    const [memberChart, setMemberChart] = useState(null);

    const {getMemberChat, getMember} = MemberService;

    useEffect(() => {
        if (routeMatch.params) {
            getMemberChat({Conversation_id: routeMatch.params.id}).then((member) => setMemberChart(member));
        }
    }, [routeMatch.params])

    useEffect(() => {
        if (localStorage.getItem("receiver")) {
            const newSearch = localStorage.getItem("receiver");
            getMember(newSearch).then((member) => setMember(member))
        }
    }, [localStorage.getItem("receiver")])
    return ( member &&
        <section className={"messageId"}>
            <div className={"messageId__header"}>
                <Icon name={"back-red"} handleClick={() => goBack()}/>
                <div className={"messageId__avatar"}>
                    <Avatar
                        width={28}
                        height={28}
                        name={member.image ? findImage(member.image) : "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"}
                    />
                    <h5 className={"messageId__name"}>
                        {member.name}
                    </h5>
                </div>
                <Icon
                    className={"messageId__more"}
                    name={"more"}
                />
            </div>
            {memberChart.length === 0 && <MessengerDefault member={member}/>}
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