import useChartData from '../../Hooks/ChartData';
import AreaChartCompo from '../Charts/AreaChartCompo/AreaChartCompo';
import BarChartCompo from '../Charts/BarChartCompo/BarChartCompo';
import ComposedChartCompo from '../Charts/ComposedChartCompo/ComposedChartCompo';
import LineChartCompo from '../Charts/LineChartCompo/LineChartCompo';
import './Dashboard.css'


const Dashboard = () => {
    const [chartData, setChartData] = useChartData();
    return (
        <div className='dashboard-container container'>
            <BarChartCompo/>
            <AreaChartCompo/>
            <LineChartCompo/>
            <ComposedChartCompo/>
        </div>
    );
};

export default Dashboard;