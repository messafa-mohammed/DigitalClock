import React,{useState,useEffect} from "react";

function DigitalClock(){

    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        const  timerID = setInterval(() => setTime(new Date()),1000);
        return  ()=> clearInterval(timerID);
    },[]);

    function formatTime(){
        let  hours = time.getHours();
        const minutes = time.getMinutes();
        const second = time.getSeconds();
        const meridiem  = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(second)} ${meridiem}`
    }
    function addZero(number){
        if (number < 10) {
            number = `0${number}`;
        }
        return number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}
export default  DigitalClock;