import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts';
import {useMemo} from "react";

const CustomPie = ({genders}) => {
    const data = useMemo(() => [
        { name: 'Мужчины', value: genders.male },
        { name: 'Женщины', value: genders.female },
    ], [genders]);

    const COLORS = ['#8884d8', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <ResponsiveContainer width="100%" height="30%">
            <PieChart width={300} height={300}>
                <Legend verticalAlign="bottom" align="center" />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomPie;