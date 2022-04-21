import {Icon, Image, List} from "../../ui";
import "./Footer.scss";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE, LIKE_ROUTE, MESSAGE_ROUTE, STATISTIC_ROUTE} from "../../routes/consts";
import {useLocation} from "react-router-dom";
import classNames from "classnames";

const Footer = () => {
    const {pathname} = useLocation();

    const navigates = [
        {id: 1, name: "home", route: HOME_ROUTE},
        {id: 2, name: "statistic", route: STATISTIC_ROUTE},
        {id: 3, name: "like", route: LIKE_ROUTE},
        {id: 4, name: "message", route: MESSAGE_ROUTE},
    ]
    return (
        <footer className={"footer"}>
            <nav className={"footer__nav"}>
                <List
                    className={"footer__list"}
                    items={navigates}
                    renderItem={(navigate) => (
                        <li key={navigate.id} className={"footer__item"}>
                            <NavLink to={navigate.route} activeClassName={classNames({"footer__active": pathname === navigate.route})}>
                                <Icon
                                    className={"footer__icon"}
                                    name={navigate.name}
                                />
                            </NavLink>
                        </li>
                    )}
                />
            </nav>
        </footer>
    );
};

export default Footer;