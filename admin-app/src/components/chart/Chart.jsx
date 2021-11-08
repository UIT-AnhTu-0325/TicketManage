import "../chart/chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, dataKey1, dataKey2, grid }) {
    return (
        <div className="chart">
            <h3><div className="chartTitle">{title}</div></h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="_id" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey1} stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}