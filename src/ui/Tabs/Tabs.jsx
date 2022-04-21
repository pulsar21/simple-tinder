import List from "../List/List";
import Tab from "./Tab/Tab";
import classNames from "classnames";
import "./Tabs.scss";

export default function Tabs({className, tabClassName, tabs, selected, setSelected}) {
    return (
        <div className={classNames("tabs", className)}>
            <List
                className={"tabs__list"}
                items={tabs}
                renderItem={(tab) => {
                    const isSelected = tab.toLowerCase() === selected.toLowerCase();
                    return (
                        <Tab
                            key={tab}
                            className={tabClassName}
                            tab={tab}
                            isSelected={isSelected}
                            setSelected={setSelected}
                        />
                    )
                }}
            />
        </div>
    );
}
