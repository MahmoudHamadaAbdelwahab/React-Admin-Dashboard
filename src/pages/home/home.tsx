import BartChartBox from '../../components/Bartchartbox/bartchartbox';
import BigChartBox from '../../components/bigchartbos/bigchartbox';
import ChartBox from '../../components/chartbox/chartbox';
import PiecChartBox from '../../components/piechartbox/piechartbox';
import TopBox from '../../components/topbox/topbox';
import { chartBoxUser,barChartBoxVisit, barChartBoxRevenue,chartBoxProduct ,chartBoxRevenue ,chartBoxConversion} from '../../data';
import './home.scss';
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>  
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PiecChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"> <BigChartBox/></div>
      <div className="box box8"><BartChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BartChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}
export default Home