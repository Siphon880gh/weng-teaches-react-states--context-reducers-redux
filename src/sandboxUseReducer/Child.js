import {useEffect, useRef, useState, useReducer} from "react";
import "./Child.css";

/**
 * Actions:
 * By convention you would have an actions.js that export variables named after user actions. Your reducer switch 
 * statements would reduce down from the action into the appropriate state changing logic, and it would have checked
 * by variable instead of hard coded string like in this simple example. Dispatch function which is signaling the user
 * action would pass in the variable name instead of the hard coded string. Benefit of using variables or enumerations 
 * include autocompletion and refactoring inside VS Code. For simplifying the code, I will comment actions out.
 */
// const PLAYING = "PLAYING";
// const PAUSED = "PAUSED";
// const STOPPED = "STOPPED";
// const INCREMENT = "INCREMENT";

// Reducer will run the appropriate state change based on the user action. Hence it reduces down to an effect.
function reducers(state, action) {
    console.log({_prevState:state, userActionOrAppAction: action.type, informationAssociatedWithAction: action?.payload})
    switch (action.type) {
      case "clicked-play": {
        return {
          ...state,
          status: "playing"
        };
      }
      case "clicked-pause": {
        return {
          ...state,
          status: "paused"
        };
      }
      case "clicked-stop": {
        return {
          ...state,
          status: "stopped",
          secs: 0
        };
      }
      case "poll-time": {
        if(state.status==="playing")
            return {
            ...state,
            secs: state.secs+1
            }
        else
            return state;
      }
      default:
        return state;
    }
} // reducers
  

function Child() {
    function formatSecs_MMSS(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    // Initialize useReducer 
    // Accepts arguments of our reducer and initial state
    // Returns state to render and returns a dispatcher to send action to reducer.
    // - Reducer will run the appropriate state changing logic
    const [state, dispatch] = useReducer(reducers, {status:"stopped", secs:0});
    
    //const [secs, setSecs] = useState(0);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          //setSecs((prevSecs) => prevSecs + 1);
            dispatch({type:"poll-time", payload:{whoami:"internal"}});
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
                <i className="fas fa-play" style={{cursor:"pointer"}} onClick={()=>dispatch({type:"clicked-play", payload:{whoami:"user"}})}></i>
                <i className="fas fa-stop" style={{cursor:"pointer"}} onClick={()=>dispatch({type:"clicked-stop", payload:{whoami:"user"}})}></i>
                <i className="fas fa-pause" style={{cursor:"pointer"}} onClick={()=>dispatch({type:"clicked-pause", payload:{whoami:"user"}})}></i>
            </div>
            <div style={{width:"fit-content", margin:"0 auto"}}>Some very long song</div>
            <div className={["timemark", state.status].join(" ")} style={{width:"fit-content", margin:"0 auto"}}><span>{formatSecs_MMSS(state.secs)}</span></div>
        </div>
    )
}

export default Child;
