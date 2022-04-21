import React, {useState} from 'react';
import {Search, TabPane, Tabs} from "../../ui";
import "./Like.scss";
import {LikeMember} from "../../components";

const Like = () => {
    const tabs = {
        other: "Лайки",
        me: "Мои лайки"
    }
    const [selectedTab, setSelectedTab] = useState(tabs.other);

    return (
        <section className={"like"}>
            <Tabs
                className={"like__tabs"}
                tabs={[tabs.other, tabs.me]}
                selected={selectedTab}
                setSelected={setSelectedTab}
            />
            <TabPane
                className={"like__pane"}
                isSelected={tabs.other === selectedTab}
            >
                <Search
                    className={"like__search"}
                    placeholder={"Искать..."}
                />
                <LikeMember/>
            </TabPane>
            <TabPane
                className={"like__pane"}
                isSelected={tabs.me === selectedTab}
            >
                <Search
                    className={"like__search"}
                    placeholder={"Искать..."}
                />
                <LikeMember/>
            </TabPane>
        </section>
    );
};

export default Like;