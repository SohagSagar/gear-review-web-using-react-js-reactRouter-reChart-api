import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../../Hooks/ChartData';
import './BarChartCompo.css'

const BarChartCompo = () => {
    const [chartData, setChartData] = useChartData();
    return (
        <div style={{paddingBottom:50}} className='chart-container'>
            <p className='chart-heading'>Bar Chart</p>
             <ResponsiveContainer>
                <BarChart className='chart-body' width={500} height={250}  data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                    <Bar dataKey="revenue" fill="#E07C24" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartCompo;