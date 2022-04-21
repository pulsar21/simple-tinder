import "./TextArea.scss";
import classNames from "classnames";

export default function TextArea({className, ...props}) {
    return (
        <textarea
            className={classNames("textarea", className)}
            {...props}
        />
    );
};