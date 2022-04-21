import {Fragment} from "react";
import classNames from "classnames";
import "./Button.scss";
import BtnLoader from "../Loader/BtnLoader/BtnLoader";

export default function Button(props) {
    const {
        className, text, iconLeft,
        loading, loaderClassName, width,
        height, ...otherProps
    } = props;
    return (
        <button
            className={classNames("btn", className, {"btn--disabled-text": props.disabled})}
            style={{width, height}}
            {...otherProps}
        >
            {
                loading
                    ? <BtnLoader className={loaderClassName}/>
                    : <Fragment>
                        {iconLeft && <div className={"btn__icon--left"}>
                            {iconLeft}
                        </div>}
                        {text}
                    </Fragment>
            }
        </button>
    );
};