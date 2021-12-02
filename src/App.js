import TempGauge from "./components/TempGauge";
import DateTime from "./components/DateTime";
import Weather from "./components/Weather";
import "./style/app.css"

import config from './config';


function App() {
  return (
    <div className="App">
      <div className="header">
        <div><Weather/></div>
        <div><DateTime returnType="date" /> <DateTime returnType="time" /></div>
      </div>


      <div className="grid-container">
        <div className="grid-item">
          <TempGauge />
        </div>
        <div className="grid-item">
          <TempGauge />
        </div>
        <div className="grid-item">
          <TempGauge />
        </div>
      </div>



    </div>
  );
}

export default App;
