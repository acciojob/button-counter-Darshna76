import React, {useState} from "react";


let Count = ()=>{
    let [count,setCount] = useState(1);
    function increase(){
        setCount(count+1);
    }
    return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={increase}>Click me</button>
        </div>
    )
}
export default Count;