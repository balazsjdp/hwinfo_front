import GaugeChart from 'react-gauge-chart'

const LoadGauge = (props) => {
    return ( 
        <div>
           <GaugeChart className="load-gauge" 
              nrOfLevels={10} 
              colors={["#34ebe8", "#f54242"]} 
              arcWidth={0.4} 
              percent={parseFloat(props.load) * 0.01}
          />
        </div>
     );
}
 
export default LoadGauge;