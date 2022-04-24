import "./Statistic.scss";
import {CustomArea, CustomBar, CustomPie} from "../../ui";
import {StatisticService} from "../../services";
import {useEffect, useState} from "react";

const Statistic = () => {
    const [genders, setGenders] = useState(null);
    const [ages, setAges] = useState(null);
    const {getStatisticGender, getStatisticAge} = StatisticService;

    useEffect(() => {
        getStatisticGender().then(res => setGenders(res));
        getStatisticAge().then(res => setAges(res));
    }, [])
    console.log(ages)
    return (
        <section className={"statistic"}>
            {ages && <CustomArea ages={ages}/>}
            {genders && <CustomPie genders={genders}/>}
            {ages && <CustomBar ages={ages}/>}
        </section>
    );
};

export default Statistic;