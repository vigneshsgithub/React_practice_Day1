import React from "react";
import './Styleforbtn.css';

const Btnfortaskone = (props) => {
    return(
        <>
              <button className="btn-styleone" on>{props.text}</button>
        </>
    )
}
export default Btnfortaskone;