import "./Couples.scss";
import {List} from "../../ui";
import {findImage} from "../../utils/functions";
import {MessageService} from "../../services";
import {ACCESS_TOKEN} from "../../consts";
import {useHistory} from "react-router-dom";
import {MESSAGE_ROUTE} from "../../routes/consts";

const Couples = ({matches}) => {
    const {push} = useHistory()
    const {createChat} = MessageService;

    const onCreateChat = async (id) => {
        const res = await createChat({receiver_id: id, authorization: localStorage.getItem(ACCESS_TOKEN)})
        if (res) {
            await push(`${MESSAGE_ROUTE}/${id}`);
        }
    };
    return (
        <div className={"couples"}>
            <h3 className={"couples__title"}>Новые пары</h3>
            <List
                className={"couples__slider"}
                items={matches}
                renderItem={(match) => (
                    <li key={match.id} className={"couples__item"} onClick={() => onCreateChat(match.user_id)}>
                        <div
                            className={"couples__content"}
                            style={{backgroundImage: `url(${match.match.image ? findImage(match.match.image) : "https://i.pinimg.com/564x/45/4e/a4/454ea4e4969afa2093c1f1de9ed278b9.jpg"})`}}
                        />
                        <h3 className={"couples__name"}>{match.match.name}</h3>
                    </li>
                )}
            />
        </div>
    );
};

export default Couples;