import React, {useState} from "react";
import Login from "./login"
import { useStateValue } from "./StateProvider";
import './app.css'

function App(){
const [state, dispatch] =useStateValue();

return (
    <div className ="app">
    <h1 className="abc">Fancy App</h1>
    <h3 className="def">{state.user ? `Logged in as ${state.user}` : "no user logged in"}</h3>
    


    <Login />
    </div>
)

}

export default App;