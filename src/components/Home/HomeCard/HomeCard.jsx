import TinderCard from "react-tinder-card";
import "./HomeCard.scss";
import HomeActions from "../HomeActions/HomeActons";

const HomeCard = ({card}) => {
    const onSwipe = (direction) => {
        console.log("You swiped: " + direction);
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
                style={{backgroundImage: `url(${card.image})`}}
            >
                <h2 className={"homeCard__name"}>{card.name}</h2>
                <HomeActions/>
            </div>
        </TinderCard>
    );
};

export default HomeCard;