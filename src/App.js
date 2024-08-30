import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  //   let name = "Hafeez";

  //   if (name === "khan") {
  //     return <Component1 />
  //   } else {
  //     return <Component2 />
  //   }
  // }


  let name = "khan";
  let age = 28;
  return (
    <div> 
      {name == "Hafeez" ? <Component1/> : <Component2/>}
      {/* {age >= 25 ? <h2> Yes you can vote</h2> : <h2>You cannot Vote</h2> } */}
    </div>
  )

}
export default App;
