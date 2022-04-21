import classNames from "classnames";
import "./ValidationError.scss";

export default function ValidationError({className, message}) {
    return (
        <div className={classNames("validation-error", className)}>
            <p className={"validation-error__text"}>
                {message}
            </p>
        </div>
    );
};