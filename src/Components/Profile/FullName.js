import React from 'react';

const fullName = (props) => {
    /* the declaration of the variables and the console.log before the return  */
    console.log(props);
    /* we can't assign a props to a value it's immutable */
    //props.name="Dalila"
    const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    <h1 style ={myStyle}>  {props.firstName} {props.lastName}</h1>

    {/* the nessecity of   {props.children}  for the inner of open and closing tag*/}
    {props.children}
        </div>

    );
};

export default fullName;