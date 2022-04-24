import React from 'react';
import {Icon, List} from "../../../ui";
import "./LikeMember.scss";
import {useHistory} from "react-router-dom";
import {LIKE_ROUTE} from "../../../routes/consts";
import {findImage} from "../../../utils/functions";
import {MemberService} from "../../../services";
import {ACCESS_TOKEN} from "../../../consts";

const LikeMember = ({members, isLike=false, setLikedMembers}) => {
    const {push} = useHistory()
    const {targetMemberChange} = MemberService;

    const onTarget = async (e, id, status) => {
        e.preventDefault();
        e.stopPropagation();
        setLikedMembers(prev => prev.filter((p) => p.id !== id));
        await targetMemberChange(id, status, {authorization: localStorage.getItem(ACCESS_TOKEN)});
    }
    return ( members &&
        <List
            className={"likeMe"}
            items={members}
            renderItem={(member) => (
                <li key={member.id} className={"likeMe__item"} onClick={() => push(`${LIKE_ROUTE}/${member.id}`)}>
                    <div
                        className={"likeMe__content"}
                        style={{backgroundImage: member.image ? `url(${findImage(member.image)})` : `url(https://i.pinimg.com/564x/f4/5f/f5/f45ff54ede674f89580b33617015b6c8.jpg)`}}
                    >
                        {isLike && <div className={"likeMe__icons"}>
                            <Icon className={"likeMe__icon"} name={"close"} handleClick={(e) => onTarget(e, member.id, -1)}/>
                            <Icon className={"likeMe__icon"} name={"heart"} handleClick={(e) => onTarget(e, member.id, 1)}/>
                        </div>}
                        <h3 className={"likeMe__name"}>{member.name}</h3>
                    </div>
                </li>
            )}
        />
    );
};

export default LikeMember;