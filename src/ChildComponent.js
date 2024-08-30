//  <-------------Function Component----------->

import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
        
            <button onClick={() => props.callMethod("Hafeez", 'khan')}>Click Me</button>
        </div>
    )
}







//  <-------------Class Component----------->

// import React, { Component } from 'react'

// export default class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.props.callMethod}>Click Me</button> */}
//         <button onClick={ () => this.props.callMethod ("Hafeez", 'khan') }>Click Me</button>

//       </div>
//     )
//   }
// }
