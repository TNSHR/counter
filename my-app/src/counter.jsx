import React,{useState} from "react";


const Counter=()=>{

    const[count,setCount]=useState(0);
    

    const Increment=()=>
        {
            setCount(count+1);
        }
        
    const Decrement=()=>
        {
            setCount(count-1);
        }

        return(<div style={{class:"container"}}>
            <h1>Counter APP</h1>
             <div >
        <div>
            <div >Count: {count}</div>
            </div>
            <div>
        
            <button style={{padding:"10px", type:"button"}} onClick={Increment}>Increment</button>
            <button style={{padding:"10px", type:"button"}} onClick={Decrement}>Decrement</button>
        </div>
        </div>
       </div>)

}
export default Counter;

