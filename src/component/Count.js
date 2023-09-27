import React, { useReducer } from 'react'
import './count.css'

const initialstate = 0;

const reducer = (state, action) =>{
    if(action.type == "increase"){
        return state + 1;
    }
    if(action.type == "decrease"){
        return state - 1;
    }
    if(action.type == "reset"){
        return state = 0;
    }
    return state;
}
export default function Count() {

    const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
     <div className="main">
        <p>{state}</p>
        <div className="btn">
            <button className="btn1" onClick={()=> dispatch({type: "increase"})}>INC</button>
            <button className="btn2" onClick={()=> dispatch({type: "decrease"})}>DEC</button>
            <button className="btn3" onClick={()=> dispatch({type: "reset"})}>RESET</button>
        </div>
     </div>
    </>
  )
}
