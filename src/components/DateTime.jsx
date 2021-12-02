import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";


const DateTime = (props) => {
    const [time, setTime] = useState(new Date());



    setInterval(() => {
        setTime(new Date())
    }, 1000);


    if(props.returnType === 'time'){
        return (<span>
             {time.getHours()}:{('0' + time.getMinutes()).slice(-2)}:{('0' + time.getSeconds()).slice(-2)}
        </span>)
    }else{
        return ( <span>
           {time.getFullYear()}.{time.getMonth()}.{('0' + time.getDate()).slice(-2)}  
        </span> );
    }

    
}
 
export default DateTime;