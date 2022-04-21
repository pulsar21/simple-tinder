import {useState, forwardRef} from "react";
import Icon from "../Icon/Icon";
import classNames from "classnames";
import "./Input.scss";

export default forwardRef(function Input(props, ref) {
    const {
        className, label, type="text",
        name, labelClassName, readOnly,
        ...otherProps
    } = props;
    const [show, setShow] = useState(false);
    return (
        <div className={classNames("input-wrapper", className, {"read-only": readOnly})}>
            {label && <label
                className={classNames("label", labelClassName)}
                htmlFor={name}
            >
                {label}
            </label>}
            <div className={"input"}>
                <input
                    className={"input__field"}
                    id={name}
                    name={name}
                    type={show ? "text" : type}
                    readOnly={readOnly}
                    ref={ref}
                    {...otherProps}
                />
                {
                    !readOnly && type === "password" && <Icon
                        className={"input__show icon--pointer"}
                        name={show ? "hide" : "show"}
                        handleClick={() => setShow(show => !show)}
                    />
                }
            </div>
        </div>
    );
});