import "./LikeId.scss";
import {Icon, List, Tag} from "../../../ui";
import {useHistory, useRouteMatch} from "react-router-dom";
import {useEffect, useState} from "react";
import {MemberService} from "../../../services";
import moment from "moment";
import {findImage} from "../../../utils/functions";

const LikeId = () => {
    const [member, setMember] = useState(null);
    const {goBack} = useHistory()
    const {params} = useRouteMatch();

    const {getMember} = MemberService;
    console.log(member)
    useEffect(() => {
        if (params) {
            getMember(params.id).then((res) => setMember(res));
        }
    }, [params])
    return ( member &&
        <section className={"likeId"}>
            <div className={"likeId__img"} style={{backgroundImage: `url(${findImage(member.image, '1000width')})`}}>
                <Icon className={"likeId__back"} name={"back"} handleClick={() => goBack()}/>
            </div>
            <div className={"likeId__about"}>
                <h2 className={"likeId__name"}>
                    {member.name} <span>{member.age}</span>
                </h2>
                <div className={"likeId__location"}>
                    <Icon name={"location"}/>
                    <p>8 км от вас</p>
                </div>
            </div>
            <div className={"likeId__about"}>
                <h2 className={"likeId__subName"}>
                    Обо мне
                </h2>
                <div className={"likeId__infos"}>
                    <div>
                        <p>Почта:</p>
                        <p>{member.email}</p>
                    </div>
                    <div>
                        <p>Возраст:</p>
                        <p>{member.age}</p>
                    </div>
                    <div>
                        <p>Дата создания:</p>
                        <p>{moment(member.created_at).format('L')}</p>
                    </div>
                </div>
            </div>
            <div className={"likeId__about"}>
                <h2 className={"likeId__interesting"}>
                    Мои интересы
                </h2>
                <List
                    className={"likeId__tags"}
                    items={member.tags}
                    renderItem={(tag) => (
                        <li key={tag.id}>
                            <Tag text={tag.title}/>
                        </li>
                    )}
                />
            </div>
        </section>
    );
};

export default LikeId;