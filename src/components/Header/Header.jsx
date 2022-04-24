import {useHistory} from "react-router-dom";
import {Avatar, Image} from "../../ui";
import "./Header.scss";
import {PROFILE_ROUTE} from "../../routes/consts";
import {findImage} from "../../utils/functions";

const Header = ({user}) => {
    const {push} = useHistory()
    return (
        <header className={"header"}>
            <Avatar
                className={"header__avatar"}
                width={50}
                height={50}
                name={findImage(user.image)}
                onClick={() => push(PROFILE_ROUTE)}
            />
            <Image
                className={"header__logo"}
                name={"logo.png"}
                width={140}
                height={100}
            />
        </header>
    );
};

export default Header;