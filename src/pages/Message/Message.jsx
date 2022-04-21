import "./Message.scss";
import {Couples, Messenger} from "../../components";

const Message = () => {
    return (
        <section className={"message"}>
            <Couples/>
            <Messenger/>
        </section>
    );
};

export default Message;