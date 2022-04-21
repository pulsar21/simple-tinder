import React from 'react';
import {Icon} from "../../../ui";
import './AuthHeader.scss';

const AuthHeader = () => {
    return (
        <header className={"authHeader"}>
            <Icon
                className={"authHeader__icon"}
                name={"tinder-white"}
            />
        </header>
    );
};

export default AuthHeader;