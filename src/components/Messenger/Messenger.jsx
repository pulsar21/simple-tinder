import "./Messenger.scss";
import {List} from "../../ui";
import {useHistory} from "react-router-dom";
import {MESSAGE_ROUTE} from "../../routes/consts";
import {findImage} from "../../utils/functions";

const Messenger = ({chats}) => {
    const {push} = useHistory()
    return (
        <div className={"messenger"}>
            <h3 className={"messenger__title"}>Сообщения</h3>
            <List
                className={"messenger__list"}
                items={chats}
                renderItem={(chat) => (
                    <li key={chat.id} className={"messenger__item"} onClick={() => {
                        localStorage.setItem("receiver", JSON.stringify(chat.receiver.id))
                        push(`${MESSAGE_ROUTE}/${chat.id}`)
                    }}>
                        {
                            chat.receiver && <div
                                className={"messenger__content"}
                            >
                                <div className={"messenger__img"} style={{backgroundImage: `url(${chat.receiver.image ? findImage(chat.receiver.image) : "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"})`}}/>
                                <div className={"messenger__about"}>
                                    <h4 className={"messenger__name"}>{chat.receiver.name}</h4>
                                    <p className={"messenger__desc"}>Был(а) недавно, создай пару прямо сейчас</p>
                                </div>
                            </div>
                        }
                    </li>
                )}
            />
        </div>
    );
};

export default Messenger;