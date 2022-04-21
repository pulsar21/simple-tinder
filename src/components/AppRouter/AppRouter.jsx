import {Route, Switch, Redirect} from "react-router-dom"
import {privateRoutes, publicRoutes} from "../../routes";
import {PublicLayout, PrivateLayout} from "../../layouts";
import {AUTH_ROUTE} from "../../routes/consts";

const AppRouter = () => {
    const isAuth = false;
    return (
        <Switch>
            {
                isAuth
                    ? privateRoutes.map(({path, Component, isFooter}) => (
                        <Route key={path} path={path} exact>
                            <PrivateLayout isFooter={isFooter}>
                                <Component/>
                            </PrivateLayout>
                        </Route>
                    ))
                    : publicRoutes.map(({path, Component}) => (
                        <Route key={path} path={path} exact>
                            <PublicLayout>
                                <Component/>
                            </PublicLayout>
                        </Route>
                    ))
            }
            <Redirect to={AUTH_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;