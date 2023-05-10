import {Parent as SandboxUseContext} from "./sandboxUseContext/Parent"
import SandboxRedux from "./sandboxRedux/Parent"

function App() {
  return (
    <div style={{padding:"20px"}}>
      <h1>UseContext vs Redux</h1>
      <p>By Weng Fei Fung. For teaching students. Click the numbers - they're counters rendered with React Context. Click the mock song player with web browser console opened - they're useReducer or Redux actions that dispatch to the reducers that handle state changes.</p>
      <p>Context is better than props when you have to do props drilling of the state value and setter down multiple components where intermediate components don't use the state in any meaningful way. The useReducer is best when you have complex actions affecting the state and need to make the code more manageable (you can have separation of concerns by implementing the state changes outside of the view components code, you can conceptualize all the user actions because you can have a file of enumerations named after user actions, you can conceptualize that user actions affect the app state, and you reduce the action into the correct state changing implementation). Finally, Redux is built on top of useReducer but it enforces the convention of a global state with design patterns such as a Provider component and a store to make it easier to handle the global state.</p>
      <SandboxUseContext/>
      <SandboxRedux/>
    </div>
  );
}

export default App;
