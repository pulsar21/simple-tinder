import {List} from "../../ui";
import {HomeCard} from "../../components";
import "./Home.scss";

const Home = () => {
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
        }
    ];
    return (
        <section className={"home"}>
            <List
                className={"home__cards"}
                items={cards}
                renderItem={(card, cardId) => (
                    <HomeCard key={cardId} card={card}/>
                )}
            />
        </section>
    );
};

export default Home;