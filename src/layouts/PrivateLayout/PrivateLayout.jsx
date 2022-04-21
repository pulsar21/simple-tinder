import React, {Suspense} from 'react';
import {Footer, Header} from "../../components";
import "./PrivateLayout.scss";
import AppLoader from "../../ui/Loader/AppLoader/AppLoader";

const PrivateLayout = ({children, isFooter}) => {
    return (
        <article className={"article"}>
            <div className={"container"}>
                {isFooter && <Header/>}
                <Suspense fallback={<AppLoader/>}>
                    {children}
                </Suspense>
                {isFooter && <Footer/>}
            </div>
        </article>
    );
};

export default PrivateLayout;