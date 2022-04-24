import React, {useEffect, useState} from 'react';
import {SignUpConfirm, SignUpForm, SignUpImage} from "../../../components";
import {useStep} from "../../../hooks";
import {SignUpProvider} from "../../../context";
import {TagService} from "../../../services";

const SignUp = () => {
    const {step, next, previous} = useStep();
    const [tags, setTags] = useState(null);

    const {getTags} = TagService;

    const initialValues = {
        name: "",
        age: "",
        email: "",
        gender: "",
        password: "",
        password_confirmation: "",
        image: ""
    };

    const switchStep = (step) => {
        switch (step) {
            case 1:
                return <SignUpForm next={next}/>;
            case 2:
                return <SignUpImage next={next} previous={previous}/>;
            case 3:
                return tags && <SignUpConfirm previous={previous} tags={tags} setTags={setTags}/>;
            default:
                return <SignUpForm next={next}/>;
        }
    }

    useEffect(async () => {
        getTags().then(res => setTags(res));
    }, [])
    return (
        <section className={"signUp"}>
            <SignUpProvider initialData={initialValues}>
                {switchStep(step)}
            </SignUpProvider>
        </section>
    );
};

export default SignUp;