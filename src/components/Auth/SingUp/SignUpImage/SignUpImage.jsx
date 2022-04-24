import React, {useCallback, useEffect, useState} from 'react';
import "./SignUpImage.scss";
import {Button, Icon, Image, Input, ValidationError} from "../../../../ui";
import {useForm} from "react-hook-form";
import {useSignUp} from "../../../../hooks";
import {useDropzone} from 'react-dropzone'
import {yupResolver} from "@hookform/resolvers/yup";
import {imageSchema} from "../../../../utils/schemas";
import {ErrorMessage} from "@hookform/error-message";

const SignUpImage = ({next, previous}) => {
    const [files, setFiles] = useState([]);
    const {data, setValues} = useSignUp();
    const {handleSubmit, formState, setValue} = useForm({resolver: yupResolver(imageSchema), mode: "onBlur"});

    const {errors} = formState;

    const onSubmit = async (data) => {
        setValues(data);
        next();
    };

    const onDrop = useCallback(acceptedFiles => {
        setValue("image", acceptedFiles[0])
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/png, image/jpg, image/jpeg',
        multiple: false
    })
    return (
        <div className={"singUpImage"}>
            <form className={"singUpImage__form"} onSubmit={handleSubmit(onSubmit)}>
                <Icon
                    className={"singUpImage__icon"}
                    name={"tinder-dark"}
                />
                <h2 className={"singUpImage__title"}>
                    Регистрация
                </h2>
                <div {...getRootProps({ onClick: e => e.preventDefault() })} className={"singUpImage__drag"}>
                    <Input
                        className={"singUpImage__img input--file"}
                        type={"file"}
                        {...getInputProps}
                    />
                    <Icon className={"singUpImage__upload"} name={"upload"}/>
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>
                <ErrorMessage
                    errors={errors}
                    name="image"
                    render={({ message }) => <ValidationError message={message}/>}
                />
                <div className={"singUpImage__preview"}>
                    {
                        files.length > 0 && files.map((file, fileId) => (
                            <div key={fileId} style={{backgroundImage: `url(${file.preview})`}}/>
                        ))
                    }
                </div>
                <div className={"singUpConfirm__btns"}>
                    <Button
                        className={"btn--pill btn--dark"}
                        loaderClassName={"btn-loader--white"}
                        type={"submit"}
                        text={"Далее"}
                    />
                    <Button
                        className={"btn--pill btn--outline-dark"}
                        type={"button"}
                        text={"Назад"}
                        onClick={() => previous()}
                    />
                </div>
            </form>
        </div>
    );
};

export default SignUpImage;