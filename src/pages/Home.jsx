
import Piechart from '../components/Piechart';

const Home = () => {
  return(
      <>
        <div className="ui main container page-content">
          <div className="ui two column stackable grid">
            <div className="ui four wide column">
              <Piechart/>
            </div>
            <div className="ui twelve wide column"></div>
            <div className="ui four wide column"></div>
            <div className="ui twelve wide column"></div>
          </div>
        </div>
      </>
  )
};

export default Home;