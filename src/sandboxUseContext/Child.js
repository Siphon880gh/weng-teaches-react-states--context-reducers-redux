// Import the hook you created to access React Context
import {useCounter} from "./Parent";

function Child() {
  // Destructure the initial values from the Context Provider value. Make sure to call the hook, eg. useCounter().
  const {count, setCount} = useCounter();

  return (
    <section 
    style={{display:"inline-block", border:"1px solid black", width:"20px", textAlign:"center"}}
    onClick={()=>{
      setCount(count+1);
    }}
  >
    {count}
  </section>
  );
}

export default Child;
