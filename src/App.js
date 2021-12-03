import axios from 'axios';


import TempGauge from "./components/TempGauge";
import LoadGauge from "./components/LoadGauge";
import DateTime from "./components/DateTime";
import Weather from "./components/Weather";


import "./style/app.css"

import config from './config';
import { useEffect, useState } from 'react';


import { BsCpu } from "react-icons/bs";
import { BsServer } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImPower } from "react-icons/im";



function App() {
  const [cpuData, setCpuData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getComputerData()

    setInterval(() => {
      getComputerData()
    }, 5000);

  },[])

  function getComputerData(){
    axios.get("./sampleData.json")
    .then((response) => {
      if(response.status != 200){
        setError(true)
      }else{
        setCpuData(response.data.CPU)
        setLoading(false)
      }
    })
  }



 if(loading){
   return (
    <div className="App">
      Loading...
    </div>
   )
 }

  return (
    <div className="App">
      <div className="header">
        <div><Weather/></div>
        <div><DateTime returnType="date" /> <DateTime returnType="time" /></div>
      </div>


      <div id="gauges" className="container">
        <div className="flex-col">
          <h3>{cpuData.name}</h3>
          <div className="flex-row">
            <div className="flex-col">
              <span className="gauge-heading" >Temperature</span>
              <TempGauge temperature={cpuData.total.temp} />
            </div>
            <div className="flex-col">
              <span className="gauge-heading">Load</span>
              <LoadGauge load={cpuData.total.load} />
            </div>
          </div>
          <div style={{width: "100%"}} className="flex-col">
            <table>
              <thead>
                <th><BsCpu /></th>
                <th><BsServer /></th>
                <th><AiOutlineClockCircle /></th>
                <th><ImPower /></th>
              </thead>
              {cpuData.cores.map(core =>{
                return (
                  <tr>
                    <td>{core.name}</td>
                    <td>{core.load} %</td>
                    <td>{core.clock} Hz</td>
                    <td>{core.power} V</td>
                  </tr>
                )
              })}
            </table>
          </div>

        </div>
        <div className="flex-col">
          <h3>GIGABYTE GTX 1660 SUPER</h3>
          <div className="flex-row">
            <div className="flex-col">
              <span className="gauge-heading" >Temperature</span>
              <TempGauge temperature={cpuData.total.temp} />
            </div>
            <div className="flex-col">
              <span className="gauge-heading">Load</span>
              <LoadGauge load={cpuData.total.load} />
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
