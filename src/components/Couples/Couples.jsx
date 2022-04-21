import "./Couples.scss";
import {List} from "../../ui";

const Couples = () => {
    const couples = [
        {
            name: "Vinsmoke Sanji",
            image: "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"
        },
        {
            name: "Roronoa Zoro",
            image: "https://i.pinimg.com/564x/fc/d8/0c/fcd80c12ea7d13936c625f93cce57044.jpg"
        },
        {
            name: "Monkey D. luffy",
            image: "https://i.pinimg.com/564x/45/4e/a4/454ea4e4969afa2093c1f1de9ed278b9.jpg"
        },
        {
            name: "Monkey D. luffy",
            image: "https://i.pinimg.com/564x/45/4e/a4/454ea4e4969afa2093c1f1de9ed278b9.jpg"
        },
        {
            name: "Monkey D. luffy",
            image: "https://i.pinimg.com/564x/45/4e/a4/454ea4e4969afa2093c1f1de9ed278b9.jpg"
        },
        {
            name: "Monkey D. luffy",
            image: "https://i.pinimg.com/564x/45/4e/a4/454ea4e4969afa2093c1f1de9ed278b9.jpg"
        },
        {
            name: "Monkey D. luffy",
            image: "https://i.pinimg.com/564x/45/4e/a4/454ea4e4969afa2093c1f1de9ed278b9.jpg"
        }
    ];
    return (
        <div className={"couples"}>
            <h3 className={"couples__title"}>Новые пары</h3>
            <List
                className={"couples__slider"}
                items={couples}
                renderItem={(couple, coupleId) => (
                    <li key={coupleId} className={"couples__item"}>
                        <div
                            className={"couples__content"}
                            style={{backgroundImage: `url(${couple.image})`}}
                        />
                        <h3 className={"couples__name"}>{couple.name}</h3>
                    </li>
                )}
            />
        </div>
    );
};

export default Couples;