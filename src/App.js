import SandboxUseContext from "./sandboxUseContext/Parent"

function App() {
  return (
    <div style={{padding:"20px"}}>
      <h1>UseContext vs Redux</h1>
      <p>By Weng Fei Fung. For teaching students. Click the numbers. They're counters.</p>
      <SandboxUseContext/>
    </div>
  );
}

export default App;
