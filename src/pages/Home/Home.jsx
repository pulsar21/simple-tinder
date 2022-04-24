import {List} from "../../ui";
import {HomeCard} from "../../components";
import "./Home.scss";
import {useEffect, useState} from "react";
import {MemberService} from "../../services";
import {ACCESS_TOKEN} from "../../consts";

const Home = () => {
    const [members, setMembers] = useState(null);

    const {getMembers} = MemberService;

    useEffect(() => {
        getMembers({authorization: localStorage.getItem(ACCESS_TOKEN)}).then(res => setMembers(res));
    }, [])
    return ( members &&
        <section className={"home"}>
            <List
                className={"home__cards"}
                items={members}
                renderItem={(member) => (
                    <HomeCard key={member.id} member={member}/>
                )}
            />
        </section>
    );
};

export default Home;