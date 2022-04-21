import classNames from "classnames";

export default function TabPane({className, children, isSelected}) {
    return isSelected && <div className={classNames("tab-pane", className)}>
        {
            children
        }
    </div>;
};