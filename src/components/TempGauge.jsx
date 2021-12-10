import GaugeChart from 'react-gauge-chart'
import { FaTemperatureLow } from "react-icons/fa";
import React from 'react';

const TempGauge = (props) => {
    return ( 
        <div>
           <GaugeChart className="temperature-gauge" 
              nrOfLevels={10} 
              colors={["#34ebe8", "#f54242"]} 
              arcWidth={0.4} 
              percent={parseFloat(props.temperature) * 0.01}
              formatTextValue = {value => value + ' C°'}
          />
        </div>
     );
}
 
export default TempGauge;