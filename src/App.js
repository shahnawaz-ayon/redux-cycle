import React from 'react'
import "./App.css"
import {incNumber} from "./Component/actions";
import {decNumber} from "./Component/actions";
import {incNumber1} from "./Component/actions";
import {decNumber1} from "./Component/actions";
import changeNumber from './Component/reducers/upDown';
import changeString from './Component/reducers/leftRight';
import { useSelector, useDispatch } from "react-redux";



const App= ()=> {
  const myState=useSelector((state)=>state.changeNumber);
  const myState1=useSelector((state)=>state.changeString);
  const dispatch=useDispatch();
  return (
    <>
      <div className="main-div">
      <div className="container">
        <h1>React-Redux Counter</h1>
          <div className="newContainer">
            
            <h4>With Increment and Decrement feature: Section 1</h4>
                <div className="quantity">
                     <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
                     <input name="quantity" type="text" className="quantity__input" value={myState} />
                     <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
          </div>
      </div>

      <div className="newContainer1">
             <h4>With Increment and Decrement feature: Section 2</h4>
                <div className="quantity">
                     <a className="quantity__minus" title="Decrement1" onClick={() => dispatch(decNumber1())}><span>-</span></a>
                     <input name="quantity" type="text" className="quantity__input" value={myState1} />
                     <a className="quantity__plus" title="Increment1" onClick={() => dispatch(incNumber1(5))}><span>+</span></a>
                </div>
          
    
      </div>
      <div className="footer">
        <p>Aubichil Intelligent Technologies. 2021</p>
      </div>
    </div>
  </div>
</>
)
}

export default App