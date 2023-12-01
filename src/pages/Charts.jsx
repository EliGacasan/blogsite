
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import MapChart from '../components/MapChart';
import ListItems from '../components/ListItems';

const Charts = () => {
  return(
      <>
        <div className="ui main container page-content">

          <div className="ui four column stackable grid">
            <div className="ui sixteen wide column">
              <h3>Practice Charts</h3>
              <br/>
              <br/>
            </div>
            <div className="ui four wide column">
              <PieChart/>
            </div>
            <div className="ui four wide column">
              <BarChart/> 
            </div>
            <div className="ui four wide column">
              <LineChart/>
            </div>
            <div className="ui four wide column">
              <ListItems/>
            </div>
            <div className="ui eight wide column">
              <MapChart/>
            </div>
            <div className="ui eight wide column" id="practiceChart">
              
            </div>
          </div>
        </div>
      </>
  )
};

export default Charts;