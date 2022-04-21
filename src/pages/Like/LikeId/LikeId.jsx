import "./LikeId.scss";
import {Icon, Tag} from "../../../ui";
import {useHistory} from "react-router-dom";

const LikeId = () => {
    const {goBack} = useHistory()
    return (
        <section className={"likeId"}>
            <div className={"likeId__img"} style={{backgroundImage: `url("/assets/img/test.jpg")`}}>
                <Icon className={"likeId__back"} name={"back"} handleClick={() => goBack()}/>
            </div>
            <div className={"likeId__about"}>
                <h2 className={"likeId__name"}>
                    Le <span>18</span>
                </h2>
                <div className={"likeId__location"}>
                    <Icon name={"location"}/>
                    <p>8 км от вас</p>
                </div>
            </div>
            <div className={"likeId__about"}>
                <h2 className={"likeId__subName"}>
                    Обо мне
                </h2>
                <div className={"likeId__infos"}>
                    <div>
                        <p>Инст:</p>
                        <p>zhsn.07</p>
                    </div>
                    <div>
                        <p>Возраст:</p>
                        <p>zhsn.07</p>
                    </div>
                    <div>
                        <p>Почта:</p>
                        <p>test@mail.ru</p>
                    </div>
                </div>
            </div>
            <div className={"likeId__about"}>
                <h2 className={"likeId__interesting"}>
                    Мои интересы
                </h2>
                <div className={"likeId__tags"}>
                    <Tag text={"Чай"}/>
                    <Tag text={"Комедия"}/>
                    <Tag text={"Танцы"}/>
                    <Tag text={"Мода"}/>
                    <Tag text={"Чай"}/>
                </div>
            </div>
        </section>
    );
};

export default LikeId;