import "./Statistic.scss";
import {CustomArea, CustomBar, CustomPie, CustomPieStatus} from "../../ui";
import {StatisticService} from "../../services";
import {useEffect, useState} from "react";

const Statistic = () => {
    const [genders, setGenders] = useState(null);
    const [ages, setAges] = useState(null);
    const [status, setStatus] = useState(null);
    const {getStatisticGender, getStatisticAge, getStatisticStatus} = StatisticService;

    useEffect(() => {
        getStatisticGender().then(res => setGenders(res));
        getStatisticAge().then(res => setAges(res));
        getStatisticStatus().then(res => setStatus(res));
    }, [])

    return (
        <section className={"statistic"}>
            {status && <CustomPieStatus status={status}/>}
            {genders && <CustomPie genders={genders}/>}
            {ages && <CustomBar ages={ages}/>}
        </section>
    );
};

export default Statistic;