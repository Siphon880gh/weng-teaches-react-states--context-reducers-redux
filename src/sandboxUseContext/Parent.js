import React, { createContext, useContext, useState } from 'react';
import Child from "./Child"

// Create a context for React Context
// It includes the Provider component that receives initial state and provides the context to descendents
const CounterContext = createContext();

// Export as a hook to use the context in a descendent component
// Remember the idea of hooks is hooking in something external into the React rendering ecosystem and is prefixed "use"
export const useCounter = () => useContext(CounterContext);

export function Parent() {
  const [count, setCount] = useState(1);

  return (
    <div style={{ margin:"20px auto", width:"fit-content", border:"1px solid black", padding:"5px"}}>
      <div style={{textAlign:"center"}}>useContext across different parts of the hierarchical tree with the same variable rendered simultaneously</div>
      <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
        <CounterContext.Provider value={{count, setCount}}>
          <Child></Child>
          <Child></Child>
          <section 
            style={{display:"inline-block", border:"1px solid black", width:"20px", textAlign:"center"}}
            onClick={()=>{
              setCount(count+1);
            }}
          >
            {count}
          </section>
        </CounterContext.Provider>
      </div>
    </div>
  );
}