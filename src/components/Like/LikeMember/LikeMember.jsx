import React from 'react';
import {List} from "../../../ui";
import "./LikeMember.scss";
import {useHistory} from "react-router-dom";
import {LIKE_ROUTE} from "../../../routes/consts";

const LikeMember = () => {
    const {push} = useHistory()
    const cards = [
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
        }
    ];
    return (
        <List
            className={"likeMe"}
            items={cards}
            renderItem={(card, cardId) => (
                <li key={cardId} className={"likeMe__item"} onClick={() => push(`${LIKE_ROUTE}/${cardId+1}`)}>
                    <div
                        className={"likeMe__content"}
                        style={{backgroundImage: `url(${card.image})`}}
                    >
                        <h3 className={"likeMe__name"}>{card.name}</h3>
                    </div>
                </li>
            )}
        />
    );
};

export default LikeMember;