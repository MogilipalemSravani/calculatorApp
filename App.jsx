import React,{useState} from "react";
const App=()=>{
const[input,setInput]=useState(" ")
const[result,setResult]=useState(" ")
const onChangeHandler=e=>{
  setInput(e.target.value);
}

  return(
<div>
<center>
  Input:<input type="text" name="input" value={input} onChange={onChangeHandler}/><br/>
  <button onClick={()=>setInput(input+'1')}>1</button>
  <button onClick={()=>setInput(input+'2')}>2</button>
  <button onClick={()=>setInput(input+'3')}>3</button>
  <button onClick={()=>setInput(input+'4')}>4</button><br/>
  <button onClick={()=>setInput(input+'5')}>5</button>
  <button onClick={()=>setInput(input+'6')}>6</button>
  <button onClick={()=>setInput(input+'7')}>7</button>
  <button onClick={()=>setInput(input+'8')}>8</button><br/>
  <button onClick={()=>setInput(input+'9')}>9</button>
  <button onClick={()=>setInput(input+'*')}>*</button>
  <button onClick={()=>setInput(input+'+')}>+</button>
  <button onClick={()=>setInput(input+'-')}>-</button><br/>
  <button onClick={()=>setInput(input+'%')}>%</button>
  <button onClick={()=>setInput(" ")}>clr</button><br/>

<button onClick={()=>setResult(eval(input))}>Result</button>

<h1>{result}</h1>
</center>
</div>
 )

}
export default App;