import {Route, Switch, Redirect} from "react-router-dom"
import {privateRoutes, publicRoutes} from "../../routes";
import {PublicLayout, PrivateLayout} from "../../layouts";
import {AUTH_ROUTE, HOME_ROUTE} from "../../routes/consts";
import {useMemo} from "react";
import {accessToken} from "../../api";

const AppRouter = ({user}) => {
    const isAuth = useMemo(() => !!accessToken, []);
    return (
        <Switch>
            {
                isAuth
                    ? privateRoutes.map(({path, Component, isFooter}) => (
                        <Route key={path} path={path} exact>
                            <PrivateLayout isFooter={isFooter}>
                                <Component user={user}/>
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
            <Redirect to={isAuth ? HOME_ROUTE : AUTH_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;