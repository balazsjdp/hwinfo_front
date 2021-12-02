import axios from 'axios';


import TempGauge from "./components/TempGauge";
import LoadGauge from "./components/LoadGauge";
import DateTime from "./components/DateTime";
import Weather from "./components/Weather";
import "./style/app.css"

import config from './config';
import { useEffect, useState } from 'react';


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


      <div id="gagues" className="grid-container">
        <div className="grid-item">
          <h3>{cpuData.name}</h3>
          <div className="grid-cont-2">
            <div className="grid-item">
              <span className="gauge-heading" >Temperature</span>
              <TempGauge temperature={cpuData.total.temp} />
            </div>
            <div className="grid-item">
              <span className="gauge-heading">Load</span>
              <LoadGauge load={cpuData.total.load} />
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-item"></div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
