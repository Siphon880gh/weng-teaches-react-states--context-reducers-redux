import React, { createContext, useState, useContext } from 'react';
import Child from "./Child"

// Create a context
const CounterContext = createContext();

function Parent() {
  return (
    <div style={{ margin:"20px auto", width:"fit-content", border:"1px solid black", padding:"5px"}}>
      <div style={{textAlign:"center"}}>useContext across different parts of the hierarchical tree with the same variable rendered simultaneously</div>
      <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
        <Child></Child>
        <Child></Child>
        <section style={{display:"inline-block", border:"1px solid black", width:"20px", textAlign:"center"}}>
          2
        </section>
      </div>
    </div>
  );
}

export default Parent;
