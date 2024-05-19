import React,{useState} from "react";


const Counter=()=>{

    const[count,setCount]=useState(0);
    

    const incre=()=>
        {
            setCount(count+1);
        }
        
    const decre=()=>
        {
            setCount(count-1);
        }

        return(<div style={{class:"container"}}>
            <h1>Counter APP</h1>
             <div >
        <div>
            <div >Count:{count}</div>
            </div>
            <div>
        
            <button style={{padding:"10px", type:"button"}} onClick={incre}>Increment</button>
            <button style={{padding:"10px", type:"button"}} onClick={decre}>Decrement</button>
        </div>
        </div>
       </div>)

}
export default Counter;

