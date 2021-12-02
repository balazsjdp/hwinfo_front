import GaugeChart from 'react-gauge-chart'

const TempGauge = () => {
    return ( 
        <div>
           <GaugeChart id="gauge-chart3" 
  nrOfLevels={5} 
  colors={["#42f545", "#f54242"]} 
  arcWidth={0.3} 
  percent={0.37} 
/>
        </div>
     );
}
 
export default TempGauge;