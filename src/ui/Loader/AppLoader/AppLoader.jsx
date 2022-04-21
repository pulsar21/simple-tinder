import React from 'react';
import "./AppLoader.scss";

const AppLoader = () => {
    return (
        <div className={"appLoader"} style={{backgroundImage: `url("/assets/img/app.png")`}}/>
    );
};

export default AppLoader;