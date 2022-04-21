import "./Messenger.scss";
import {List} from "../../ui";
import {useHistory} from "react-router-dom";
import {MESSAGE_ROUTE} from "../../routes/consts";

const Messenger = () => {
    const {push} = useHistory()
    const messages = [
        {
            name: "Vinsmoke Sanji",
            image: "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"
        },
        {
            name: "Vinsmoke Sanji",
            image: "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"
        },
        {
            name: "Vinsmoke Sanji",
            image: "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"
        },
        {
            name: "Vinsmoke Sanji",
            image: "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"
        },
        {
            name: "Vinsmoke Sanji",
            image: "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"
        },
        {
            name: "Vinsmoke Sanji",
            image: "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"
        }
    ];
    return (
        <div className={"messenger"}>
            <h3 className={"messenger__title"}>Сообщения</h3>
            <List
                className={"messenger__list"}
                items={messages}
                renderItem={(message, messageId) => (
                    <li key={messageId} className={"messenger__item"} onClick={() => push(`${MESSAGE_ROUTE}/${messageId+1}`)}>
                        <div
                            className={"messenger__content"}
                        >
                            <div className={"messenger__img"} style={{backgroundImage: `url(${message.image})`}}/>
                            <div className={"messenger__about"}>
                                <h4 className={"messenger__name"}>{message.name}</h4>
                                <p className={"messenger__desc"}>Был(а) недавно, создай пару прямо сейчас</p>
                            </div>
                        </div>
                    </li>
                )}
            />
        </div>
    );
};

export default Messenger;