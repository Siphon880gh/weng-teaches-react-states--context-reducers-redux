import {Parent as SandboxUseContext} from "./sandboxUseContext/Parent"

function App() {
  return (
    <div style={{padding:"20px"}}>
      <h1>UseContext vs Redux</h1>
      <p>By Weng Fei Fung. For teaching students. Click the numbers. They're counters. Context is better than props when you have to do props drilling of the state value and setter down multiple components. Redux is best when you have complex actions affecting the state and need to make the code more manageable (you can can separate the state changes from the component markdown, you can abstract the user actions).</p>
      <SandboxUseContext/>
    </div>
  );
}

export default App;
