import {lazy} from "react";
import {
    AUTH_ROUTE,
    HOME_ROUTE,
    LIKE_ROUTE,
    MESSAGE_ROUTE,
    PROFILE_ROUTE,
    SIGN_IN_ROUTE, SIGN_UP_ROUTE,
    STATISTIC_ROUTE
} from "./consts";

const Home = lazy(() => import("../pages/Home/Home").then(module => module));
const Profile = lazy(() => import("../pages/Profile/Profile").then(module => module));
const Message = lazy(() => import("../pages/Message/Message").then(module => module));
const MessageId = lazy(() => import("../pages/Message/MessageId/MessageId").then(module => module));
const Auth = lazy(() => import("../pages/Auth/Auth").then(module => module));
const Like = lazy(() => import("../pages/Like/Like").then(module => module));
const LikeId = lazy(() => import("../pages/Like/LikeId/LikeId").then(module => module));
const Statistic = lazy(() => import("../pages/Statistic/Statistic").then(module => module));
const SignIn = lazy(() => import("../pages/Auth/SignIn/SignIn").then(module => module));
const SignUp = lazy(() => import("../pages/Auth/SignUp/SignUp").then(module => module));

const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: SIGN_IN_ROUTE,
        Component: SignIn
    },
    {
        path: SIGN_UP_ROUTE,
        Component: SignUp
    }
]

const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
        isFooter: true
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile,
        isFooter: false
    },
    {
        path: MESSAGE_ROUTE,
        Component: Message,
        isFooter: true
    },
    {
        path: MESSAGE_ROUTE + "/:id",
        Component: MessageId,
        isFooter: false
    },
    {
        path: LIKE_ROUTE,
        Component: Like,
        isFooter: true
    },
    {
        path: LIKE_ROUTE + "/:id",
        Component: LikeId,
        isFooter: false
    },
    {
        path: STATISTIC_ROUTE,
        Component: Statistic,
        isFooter: true
    }
]

export {
    publicRoutes, privateRoutes
}