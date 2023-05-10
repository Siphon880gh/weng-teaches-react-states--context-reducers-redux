import {useEffect, useRef, useState} from "react";
import "./Child.css";

function Child() {
    function formatSecs_MMSS(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    const [secs, setSecs] = useState(0);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setSecs((prevSecs) => prevSecs + 1);
        }, 1000);
      }
  
      return () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      };
    }, []);
    
    return (
        <div style={{margin:"20px auto", width:"fit-content", border:"1px solid black", padding:"5px"}}>
            <div style={{textAlign:"center"}}>useReducer to manage user actions and their state changes</div>
            <div style={{display:"flex", gap:"10px", justifyContent:"center", margin:"10px"}}>
                <i className="fas fa-play" style={{cursor:"pointer"}}></i>
                <i className="fas fa-stop" style={{cursor:"pointer"}}></i>
                <i className="fas fa-pause" style={{cursor:"pointer"}}></i>
            </div>
            <div style={{width:"fit-content", margin:"0 auto"}}>Some very long song</div>
            <div style={{width:"fit-content", margin:"0 auto"}}><span>{formatSecs_MMSS(secs)}</span></div>
        </div>
    )
}

export default Child;
