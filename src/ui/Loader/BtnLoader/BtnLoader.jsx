import classNames from "classnames";
import "./BtnLoader.scss";

export default function BtnLoader({className}) {
    return (
        <div className={classNames("btn-loader", className)}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};