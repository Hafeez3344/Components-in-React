import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {

ParentMethod = (childName, surname) => {
    alert(`Hello from Parent Name: ${childName} and Surname is ${surname}`);
}

  render() {
    return (
      <div>
        <ChildComponent  callMethod={this.ParentMethod}/>
      </div>
    )
  }
}
