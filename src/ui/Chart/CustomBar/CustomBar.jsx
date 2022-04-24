import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomBar = ({ages}) => {
    const data = [
        {
            name: '18-31',
            uv: ages["18-31-female"],
            pv: ages["18-31-male"],
            amt: 100,
        },
        {
            name: '31-100',
            uv: ages["31-100-female"],
            pv: ages["31-100-male"],
            amt: 100,
        }
    ];

    return (
        <ResponsiveContainer width="100%" height="30%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" name={"Мужчины"}/>
                <Bar dataKey="uv" fill="#82ca9d" name={"Женщины"}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBar;