import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../../Hooks/ChartData';
import './ComposedChartCompo.css'

const ComposedChartCompo = () => {
    const [chartData, setChartData] = useChartData();
    return (
        <div style={{paddingBottom:50}} className='chart-container'>
            <p className='chart-heading'> Composed Chart </p>
            <ResponsiveContainer>
                <ComposedChart width={500} height={250} data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ComposedChartCompo;