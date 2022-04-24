import "./Message.scss";
import {Couples, Messenger} from "../../components";
import {useEffect, useState} from "react";
import {LikeService, MessageService} from "../../services";
import {ACCESS_TOKEN} from "../../consts";

const Message = () => {
    const [matches, setMatches] = useState(null);
    const [chats, setChats] = useState(null);
    const {getMatches} = LikeService;
    const {getChats} = MessageService;

    useEffect(() => {
        getMatches({authorization: localStorage.getItem(ACCESS_TOKEN)}).then(res => setMatches(res));
    }, [])

    useEffect(() => {
        getChats({authorization: localStorage.getItem(ACCESS_TOKEN)}).then(res => setChats(res));
    }, [])
    return (
        <section className={"message"}>
            {matches && <Couples matches={matches}/>}
            {chats && <Messenger chats={chats}/>}
        </section>
    );
};

export default Message;