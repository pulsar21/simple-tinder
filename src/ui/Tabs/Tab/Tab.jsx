import classNames from "classnames";
import "./Tab.scss";

export default function Tab({className, tab, isSelected, setSelected}) {
    const selectTabHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSelected(tab);
    };
    return (
        <li
            className={classNames("tab", className, {active: isSelected})}
            onClick={selectTabHandler}
        >
            <p className={"tab__text"}>
                {tab}
            </p>
        </li>
    );
}