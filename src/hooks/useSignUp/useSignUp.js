import {useContext} from "react";
import {SingUpContext} from "../../context";

export default function useSignUp() {
    const data = useContext(SingUpContext);

    if (!data) {
        throw new Error("Error in creating the context");
    }

    return data;
};