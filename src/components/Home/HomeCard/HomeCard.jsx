import TinderCard from "react-tinder-card";
import "./HomeCard.scss";
import HomeActions from "../HomeActions/HomeActons";
import {findImage} from "../../../utils/functions";
import {MemberService} from "../../../services";
import {ACCESS_TOKEN} from "../../../consts";

const HomeCard = ({member}) => {
    const {targetMember} = MemberService;

    const onTarget = async (status) => {
        await targetMember(member.id, status, {authorization: localStorage.getItem(ACCESS_TOKEN)})
    }

    const onSwipe = (direction) => {
        switch (direction) {
            case "right":
                return onTarget(0);
            case "left":
                return onTarget(-1);
        }
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + " left the screen");
    };
    return (
        <TinderCard
            className={"homeCard__swipe"}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
        >
            <div
                className={"homeCard__content"}
                style={{backgroundImage: `url(${member.image ? findImage(member.image) : "https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg"})`}}
            >
                <h2 className={"homeCard__name"}>{member.name}</h2>
                <HomeActions/>
            </div>
        </TinderCard>
    );
};

export default HomeCard;