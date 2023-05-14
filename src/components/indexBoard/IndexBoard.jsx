import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './IndexBoard.scss';

const IndexBoard = () => {
    const data = [
        {
            year: 2000,
            value: 2.1
        },
        {
            year: 2001,
            value: 3.1
        },
        {
            year: 2002,
            value: 2.4
        },
        {
            year: 2003,
            value: 2.8
        },
        {
            year: 2004,
            value: 4.1
        }
    ]

    return (
        <div className='index-board'>
            <div>
                <LineChart className='linechart' width={320} height={130} data={data}>
                    <Line type="linear" dataKey={'value'} stroke="#8884d8" />
                    <XAxis dataKey={'year'} />
                    <YAxis />
                    
                    <Tooltip className='chart-tooltip' />
                </LineChart>
            </div>
            <div>federal rate</div>
            <div>gdp</div>
        </div>
    );
};

export default IndexBoard;