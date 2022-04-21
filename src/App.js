import "./App.scss";
import {AppRouter} from "./components";
import {useEffect, useMemo, useState} from "react";
import {AuthService} from "./services";
import {accessToken} from "./api";
import AppLoader from "./ui/Loader/AppLoader/AppLoader";
import {ACCESS_TOKEN} from "./consts";

const App = () => {
    const isAuth = useMemo(() => !!accessToken, []);
    const [user, setUser] = useState(null);
    const {me} = AuthService;

    const getMe = async (authorization) => {
        const res = await me({authorization});
        setUser(res[0]);
    };

    useEffect(() => {
        if (isAuth) {
            getMe(localStorage.getItem(ACCESS_TOKEN));
        }

        return () => setUser(null);
    }, []);

    if (!user && isAuth) {
        return <AppLoader />;
    }
    return (
        <main className={"app"}>
            <AppRouter user={user}/>
        </main>
    );
};

export default App;