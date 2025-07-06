import React from "react";

const Host = () =>{
    return(
        <>
            <Red clr={Main} />
        </>
    )
}

const Red = (props) =>{
    return(
        <>
            <div style={{color:'#ffff00'}}><props.clr/></div>
        </>
    )
}

const Main = () =>{
    return(
        <>
            <h2>hello world</h2>
        </>
    )
}


export default Host;