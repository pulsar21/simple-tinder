import icons from "./common.json";
import classNames from "classnames";

export default function Icon({className, name, handleClick}) {
    return (
        <div
            className={classNames("icon", className)}
            dangerouslySetInnerHTML={{__html: icons[name]}}
            onClick={handleClick}
        />
    )
};