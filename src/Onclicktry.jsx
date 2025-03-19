import React from "react";
import { useState } from "react";
import './Onclicktry.css';
const Onclicktry = (props) => {
    const [state, setState] = useState();
    function tryfunc() {
        setState("red");
    }
    return (
        <div>
            <p className={state}>Hello everyone im a paragraph tag</p>
            <button onClick={() => tryfunc()}>{props.children}</button>
        </div>
    )
};

export default Onclicktry;