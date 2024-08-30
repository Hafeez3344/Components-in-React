import React, { Component } from 'react'

export default class inlineStyleComponent extends Component {
  render() {
    let obj = {
        color: "yellow",
        backgroundColor: "grey",
        fonctsize: "50px"
    }


    let obj1 = {
        color: "green",
        backgroundColor: "lightGray",
    }

    let obj2 = {
        fonctsize: "50px",
        fontFamily: "cooper"
    }
    return (
      <div>
        { <h1 style={{color:"red"}}>Hello Styling Component in React</h1> }
        { <h1 style={{color:"white", backgroundColor:"gray"}}>Hello Styling Component in React</h1> }
        { <h1 style={obj}>Hello Styling Component in React</h1> }
        <h1 style={{...obj1, ...obj2}}>Through Spread Operator</h1>


      </div>
    )
  }
}
