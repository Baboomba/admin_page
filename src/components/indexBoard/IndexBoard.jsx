import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, PieChart, Pie, Cell } from 'recharts';
import './IndexBoard.scss';
import { useState } from 'react';

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

    // custom tooltip
    const customTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            console.log(label);
            return (
                <div className='custom-tooltip'>
                    <div>{`year : ${label}`}</div>
                    <div style={{fontSize:'13px', fontWeight:'1000'}}>{`rate :${payload[0].value}`}</div>
                </div>
            );
        }        
    };

    // controll bar of the bar-chart
    // const [barIndex, setBarIndex] = useState(null);
    // const handleMouseEnter = (data, index) => {
    //     setBarIndex(index);
    // };
    // const handleMouseLeave = () => {
    //     setBarIndex(null);
    // };

    // controll pie chart
    const COLORS = ['#0087fe80', '#00c4a083', '#ff814283', '#424fff83', '#ffbb2879'];

    return (
        <div className='index-board'>
            <div className='chart-wrapper'>
                <LineChart className='linechart basic' width={320} height={130} data={data}>
                    <Line type="linear" dataKey={'value'} stroke="orange" dot={null} />
                    <XAxis dataKey={'year'} />
                    <CartesianGrid strokeDasharray="2 2" />                    
                    <Tooltip content={customTooltip} />
                    <Legend verticalAlign='top' align='right' />
                </LineChart>
            </div>
            <div>
                <div className='chart-wrapper'>
                    <BarChart className='linechart basic' width={320} height={130} data={data} >
                        <Bar
                            barSize={30}
                            radius={[3, 3, 0, 0]}
                            dataKey={'value'}
                            fill="pink"
                            // onMouseEnter={handleMouseEnter}
                            // onMouseLeave={handleMouseLeave}
                        />
                        <XAxis dataKey={'year'} />
                        <Tooltip cursor={{fill: '#ffc0cb63'}} content={customTooltip} />
                        <CartesianGrid strokeDasharray="2 2" />
                        <Legend verticalAlign='top' align='right' />
                    </BarChart>
                </div>
            </div>
            <div>
                <div className='chart-wrapper'>
                    <PieChart className='linechart basic' width={320} height={130}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={data}
                            outerRadius={55}
                            innerRadius={40}
                            paddingAngle={3}
                            label
                        >
                        {data.map((entry, index) => (
                                <Cell fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip content={customTooltip} />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default IndexBoard;