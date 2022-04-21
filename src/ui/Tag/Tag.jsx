import classNames from "classnames";
import "./Tag.scss";

export default function Tag({className, text}) {
    return (
        <div
            className={classNames("tag", className)}
        >
            <p className={"tag__text"}>
                {
                    text
                }
            </p>
        </div>
    );
};