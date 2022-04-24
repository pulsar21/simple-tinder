import {createContext, useState} from "react";

const SingUpContext = createContext(null);

function SignUpProvider({children, initialData}) {
    const [data, setData] = useState(initialData);

    const setValues = (values) => {
        setData(prevData => ({
            ...prevData,
            ...values
        }));
    };

    return (
        <SingUpContext.Provider value={{data, setValues}}>
            {children}
        </SingUpContext.Provider>
    );
};

export {SingUpContext, SignUpProvider};