import "./ProfileSettings.scss";
import {Input, List} from "../../../ui";

const ProfileSettings = () => {
    const fields = [
        {id: 1, label: "Номер телефона", placeholder: "Введите"},
        {id: 2, label: "Почта", placeholder: "Введите"},
        {id: 3, label: "Возраст", placeholder: "Введите"},
        {id: 4, label: "Пароль", placeholder: "Введите"},
    ]
    return (
        <List
            className={"profileSettings"}
            items={fields}
            renderItem={(field) => (
                <li key={field.id} className={"profileSettings__item"}>
                    <Input
                        label={field.label}
                        placeholder={field.placeholder}
                    />
                </li>
            )}
        />
    );
};

export default ProfileSettings;