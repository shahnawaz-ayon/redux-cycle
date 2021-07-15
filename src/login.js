import React from "react";

import { useStateValue } from "./StateProvider";


function Login(props){
    const [state, dispatch] = useStateValue();

    const loginToApp =()=>{
        dispatch ({
            type:"SET_USER",
            user:"Ayon",
        });

    };

    return(
        <div>
            <h1>login component</h1>
            <button onClick={loginToApp}>Login</button>

        </div>

    );

}

export default Login;