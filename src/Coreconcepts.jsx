import React from "react";
import coreconceptss from "./Coreconceptss";

const Coreconcepts = () => {
    return (
        <>
            <h1>Hello</h1>
            {
                coreconceptss.map((value, index) =>(
                    <Coreconcepts key={index} {...value}/>
                )
                )}

                
                
            
        </>
    )
}

export default Coreconcepts;