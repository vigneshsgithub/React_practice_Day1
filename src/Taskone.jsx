// import React, { useState } from "react";
// import './App.css'
// import reactLogo from './assets/react.svg';
// import Btnfortaskone from "./btnfortaskone.jsx";
// import Btnforscript from "./Btnforscript.jsx";
// import content from './btnfortaskone.js';




// const Taskone = () => {

//     const [isVisible, setVisible] = useState(false);
//     const [counter, setcounter]=useState(0);

//     function handleclick(){
//         alert('I have been called by a function in the onClick prop');
//     }
//      function increment() {
//         if(!(counter > 9)) {
//             setcounter((prevState) => { return prevState + 1});
//         }
//      }

//     return (
//         <>
//             <div className="container">
//                 <a href="https://react.dev" target="_blank">
//                     <img src={reactLogo} className="logo" alt="React logo" />
//                 </a>
//                 <h1 className="hone">Our First <span className="spantag"> React</span> App</h1>
//                 <h2 className="htwo">Time To Get Your Hands Dirty</h2>
//             </div>
//             <div className="btn-container">
//                 <Btnfortaskone text={"Use the attached (Updated !) demo app"} />
//                 <Btnfortaskone text={"Add a fourth button"} />
//                 <Btnfortaskone text={"Load this content for this button from the content array"} />
//             </div>

//             <div className="Btnsforscript">
//                 <Btnforscript text={"Btn text"} onClick={() => {setVisible(!isVisible)}} />
//                 <Btnforscript text={"Btn text"} onClick={() => {alert("Hello World")}}/>
//                 <Btnforscript text={"Btn text"} onClick={()=>{prompt('Enter Your Password :')}} />
//                 <Btnforscript text={"Btn text"} onClick={()=>{{handleclick()}}} />
          
//             </div>

//             {
//                 (isVisible) ?
//                     <div className="content-div" style={{color: "black"}}>
//                         {content.map((contentArray, index) => {
//                             return (
//                                 <div key={index}>
//                                     {contentArray.map((content, index) => {
//                                         return <p key={index}>{content}</p>;
//                                     })}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                     :
//                     <div>
//   <div className="container" style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
//              <h1 style={{color:"white"}}>useState</h1>
//             <p style={{color:"white",fontSize:"25px"}} >{counter}</p>
//             <button onClick={()=>{increment()}} style={{  backgroundColor: "rgb(255, 255, 255)",width:"550px",height: "70px", backgroundColor: "#3400E9",color:"#FFFBFF",border: "none",fontSize: "25px",margin: "10px",borderRadius: "10px",transition: "all 0.3s ease"}}>Click me!</button>
//             </div>
//                     </div>
//              }
             
//         </>
//     )
// }
// const boxforbtn =<div data-testid="alert" id="alert">
// <h2>Are you sure?</h2>
//  <p>These changes can't be reverted!</p>
//   <button>Proceed</button>
// </div>;

// function toggle(){
// const d="Delete";
// if(d==="Delete"){
// boxforbtn
// }else{
// <button>Delete</button>
// }
// }
// return (
// <div>

// <button onClick={toggle()}>Delete</button>

// </div>    
// );
export default Taskone;