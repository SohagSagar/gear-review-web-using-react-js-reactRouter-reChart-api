import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../../Hooks/ChartData';

const LineChartCompo = () => {
    const [chartData, setChartData] = useChartData();
    return (
        <div className='chart-container'>
            <p className='chart-heading'>Line Chart</p>
            <LineChart width={500} height={250} data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                <Line type="monotone" dataKey="revenue" stroke="#E07C24" />
            </LineChart>
        </div>
    );
};

export default LineChartCompo;