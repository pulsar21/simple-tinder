import React, {useEffect, useState} from 'react';
import {Search, TabPane, Tabs} from "../../ui";
import "./Like.scss";
import {LikeMember} from "../../components";
import {LikeService} from "../../services";
import {ACCESS_TOKEN} from "../../consts";

const Like = () => {
    const tabs = {
        other: "Лайки",
        me: "Мои лайки"
    }
    const [selectedTab, setSelectedTab] = useState(tabs.other);
    const [likedMembers, setLikedMembers] = useState([]);
    const [constMembers, setConstMembers] = useState([]);
    const [search, setSearch] = useState("");

    const {getLikeMe, getLikeOther} = LikeService;

    const searchMembers = (value) => {
        const newValue = value.toLowerCase();
        setSearch(value);

        if (newValue.length > 0) {
            const newLikeMembers = likedMembers.filter(member => {
                return member.name.toLowerCase().indexOf(newValue) > -1
            });
            if (newLikeMembers.length > 0) {
                setLikedMembers(newLikeMembers);
            } else {
                setLikedMembers([]);
            }
        } else {
            setLikedMembers(constMembers);
        }
    };
    useEffect(() => {
        if (tabs.me === selectedTab) {
            getLikeMe({authorization: localStorage.getItem(ACCESS_TOKEN)}).then(res => {
                setLikedMembers(res)
                setConstMembers(res);
            });
        } else {
            getLikeOther({authorization: localStorage.getItem(ACCESS_TOKEN)}).then(res => {
                setLikedMembers(res)
                setConstMembers(res)
            });
        }

        return () => {
            setLikedMembers([]);
        }
    }, [selectedTab])
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
                    value={search}
                    onChange={e => searchMembers(e.target.value)}
                />
                {likedMembers.length > 0 && <LikeMember members={likedMembers} isLike={true} setLikedMembers={setLikedMembers}/>}
            </TabPane>
            <TabPane
                className={"like__pane"}
                isSelected={tabs.me === selectedTab}
            >
                <Search
                    className={"like__search"}
                    placeholder={"Искать..."}
                    value={search}
                    onChange={e => searchMembers(e.target.value)}
                />
                {likedMembers.length > 0 && <LikeMember members={likedMembers}/>}
            </TabPane>
        </section>
    );
};

export default Like;