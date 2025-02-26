import React from "react";
import './App.css'
import reactLogo from './assets/react.svg';
import Btnfortaskone from "./btnfortaskone.jsx";
import Btnforscript from "./Btnforscript.jsx";
import content from './btnfortaskone.js'

const Taskone = () => {
    return (
        <>
        <div className="container">
         <a href="https://react.dev" target="_blank">
           <img src={reactLogo} className="logo" alt="React logo" />
         </a>
       <h1 className="hone">Our First <span className="spantag"> React</span> App</h1>
       <h2 className="htwo">Time To Get Your Hands Dirty</h2>
       </div>
       <div className="btn-container">
        <Btnfortaskone text={"Use the attached (Updated !) demo app"}/>
        <Btnfortaskone text={"Add a fourth button"}/>
        <Btnfortaskone text={"Load this content for this button from the content array"}/>
        </div>

        <div className="Btnsforscript">
            <Btnforscript text={"Btn text"}/>
            <Btnforscript text={"Btn text"}/>
            <Btnforscript text={"Btn text"}/>
            <Btnforscript text={"Btn text"}/>
        </div>
      <div className="content-div">
        <content/>
      </div>
        </>
    )
}
export default Taskone; 