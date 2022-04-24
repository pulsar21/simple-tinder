import {useCallback, useState} from "react";

export default function useStep() {
    const [step, setStep] = useState(1);

    const next = useCallback(() => {
        setStep(step => step + 1)
    }, [setStep]);

    const previous = useCallback(() => {
        setStep(step => step - 1)
    }, [setStep]);

    return {
        step,
        setStep,
        next,
        previous
    };
};