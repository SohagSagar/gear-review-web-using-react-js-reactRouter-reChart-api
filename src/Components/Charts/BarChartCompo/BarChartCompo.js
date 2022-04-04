import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../../Hooks/ChartData';

const BarChartCompo = () => {
    const [chartData, setChartData] = useChartData();
    return (
        <div className='chart-container'>
            <p className='chart-heading'>Bar Chart</p>
            <BarChart width={500} height={250} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="sell" fill="#82ca9d" />
                <Bar dataKey="revenue" fill="#E07C24" />
            </BarChart>
        </div>
    );
};

export default BarChartCompo;