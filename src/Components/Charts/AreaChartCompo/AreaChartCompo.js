import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../../Hooks/ChartData';

const AreaChartCompo = () => {
    const [chartData, setChartData] = useChartData();
    return (
        <div style={{paddingBottom:50}} className="chart-container">
            <p className='chart-heading'>Area Chart</p>
            <ResponsiveContainer>
                <AreaChart width={500} height={250} data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#E07C24" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#E07C24" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#E07C24" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AreaChartCompo;