
import { useState } from 'react';
import './App.css';

function App() {

  const [ans,getAnswer] = useState("");
  const [disp, setDisplay] = useState("");
  const [preAns, setPreAns] = useState("");

  const updateDisplay = (val)=>{
    let lastChar = disp[disp.length-1];
    if((lastChar === "+" && val === "+") || (lastChar === "/" && val === "/") || (lastChar==="*" && val==="*") || (lastChar === "." && val === "." )){
      alert(lastChar);
    }else{
      setDisplay(disp+val);
    }
    if((lastChar !== "+")||(lastChar !== "/")||(lastChar !== "-")||((lastChar !== "*"))){
      setPreAns(eval(disp));
    }
  }

  const deleteChar = ()=>{
    let temp = disp.slice(0,-1);
    setDisplay(temp);
  }

  const calculate = ()=>{
    getAnswer(eval(disp)); 
  }

  const Digits = () =>{
    let arr = [];
    for(let i=1;i<10;i++){
      arr.push(<button onClick={()=>updateDisplay(i)} key={(i)}>{i}</button>);
    }
    return arr;
  }

  return (
    <div className="App">
      <div className='Display'>
          <span>
            {ans ? ans : preAns}
            </span> {disp}
      </div>
      <div className='Operands'>
          <button onClick={()=> updateDisplay("+")}>+</button>
          <button onClick={()=> updateDisplay("-")}>-</button>
          <button onClick={()=> updateDisplay("/")}>/</button>
          <button onClick={()=> updateDisplay("*")}>*</button>
          <button onClick={()=> deleteChar()}>DEL</button>
      </div>
      <div className='Digits'>
        <button onClick={()=> updateDisplay("0")}>0</button>
        <button onClick={()=> updateDisplay(".")}>.</button>
        <button className='Equals' onClick={()=> calculate()}>=</button>
        <Digits />
      </div>
    </div>
  );
}

export default App;
