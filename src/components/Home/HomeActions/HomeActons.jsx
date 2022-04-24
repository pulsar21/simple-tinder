import React from 'react';
import {Icon, List} from "../../../ui";
import "./HomeActions.scss";

const HomeActions = () => {
    const actions = [
        {id: 1, name: "close"},
        {id: 2, name: "heart"},
    ];
    return (
        <List
            className={"homeActions"}
            items={actions}
            renderItem={(action) => (
                <li
                    key={action.id}
                    className={"homeActions__item"}
                >
                    <Icon
                        className={"homeActions__icon"}
                        name={action.name}
                    />
                </li>
            )}
        />
    );
};

export default HomeActions;