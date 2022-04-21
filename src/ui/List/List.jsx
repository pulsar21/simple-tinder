import React from 'react';
import classNames from "classnames";

const List = ({className, items, renderItem}) => {
    return (
        <ul className={classNames("list", className)}>
            {
                items.map(renderItem)
            }
        </ul>
    );
};

export default List;