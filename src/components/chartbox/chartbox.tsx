import { Link } from 'react-router-dom'
import './chartbox.scss'
import { LineChart, Line, ResponsiveContainer,Tooltip } from 'recharts';

 // props
 type props={
    color: string;
    icon: string;
    title: string;
    dataKey:string;
    number: number | string;
    percentage: number;
    chartData: object[];
 }

 const ChartBox = (props: props) => {
  return (
    <div className='chartbox'>
        <div className="boxInfo">
            <div className="title">
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to='/' style={{color:props.color}}>View all</Link>
        </div>
        <div className="chartInfo">
            <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart  data={props.chartData}>
                <Tooltip contentStyle={{background:'transparent' , border:'none'}}
                labelStyle={{display:'none'}}
            />
                <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false}/>
                </LineChart>
            </ResponsiveContainer>
            </div>
            <div className="texts">
                <span className="percentage">{props.percentage}</span>
                <span className="duration">this month</span>
            </div>
        </div>
    </div>
  )
}
export default ChartBox
