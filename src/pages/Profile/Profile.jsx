import React, {useCallback, useState} from 'react';
import {Avatar, Icon} from "../../ui";
import "./Profile.scss"
import {ProfileSettings} from "../../components";
import {useHistory} from "react-router-dom";
import {findImage} from "../../utils/functions";
import {useDropzone} from "react-dropzone";
import {AuthService} from "../../services";

const Profile = ({user}) => {
    const {goBack} = useHistory();
    const [files, setFiles] = useState([]);

    const {updateProfile} = AuthService;

    const onDrop = useCallback(async (acceptedFiles) => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        const formData = new FormData();
        formData.append("image", acceptedFiles[0]);
        await updateProfile(formData, user.id);
    }, [])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/png, image/jpg, image/jpeg',
        multiple: false
    })
    console.log(files)
    return ( user &&
        <section className={"profile"}>
            <div className={"profile__header"}>
                <Icon
                    className={"profile__icon"}
                    name={"back"}
                    handleClick={() => goBack()}
                />
                <h3 className={"profile__title"}>
                    Профиль
                </h3>
            </div>
            <div className={"profile__img"} {...getRootProps()}>
                <input {...getInputProps()}/>
                <Avatar
                    className={"profile__avatar"}
                    width={200}
                    height={200}
                    name={files.length > 0 ? files[0]?.preview : findImage(user.image)}
                />
                <Icon name={"edit"}/>
            </div>
            <h1 className={"profile__name"}>
                {user.name}, {user.age}
            </h1>
            <ProfileSettings user={user}/>
        </section>
    );
};

export default Profile;