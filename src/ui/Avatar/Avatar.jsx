import React from 'react';
import classNames from "classnames";
import "./Avatar.scss";

const Avatar = ({className, width, height, src, name, ...props}) => {
    return (
        <div
            className={classNames("avatar", className, {"avatar__empty": !src})}
            style={{width, height}}
            {...props}
        >
           <div className={"avatar__img"} style={{backgroundImage: `url(${src ?? name})`}}/>
        </div>
    );
};

export default Avatar;