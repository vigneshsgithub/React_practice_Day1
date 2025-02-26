import React from "react";
import './Btnforscript.css';


const Btnforscript = (props) =>{
    return(
        <>
        <button className="btnstyleforscript" onClick={props.onClick}>{props.text} </button>
        </>
    )
}
export default Btnforscript;