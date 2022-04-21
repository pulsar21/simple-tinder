import React, {Suspense} from 'react';
import {AuthHeader} from "../../components";
import "./PublicLayout.scss";
import AppLoader from "../../ui/Loader/AppLoader/AppLoader";

const PublicLayout = ({children}) => {
    return (
        <article className={"publicLayout"} style={{backgroundImage: `url("/assets/img/bg.webp")`}}>
            <div className={"container"}>
                <AuthHeader/>
                <Suspense fallback={<AppLoader/>}>
                    {children}
                </Suspense>
            </div>
        </article>
    );
};

export default PublicLayout;