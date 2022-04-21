import "./Statistic.scss";
import {CustomArea, CustomBar, CustomPie} from "../../ui";

const Statistic = () => {
    return (
        <section className={"statistic"}>
            <CustomArea/>
            <CustomPie/>
            <CustomBar/>
        </section>
    );
};

export default Statistic;