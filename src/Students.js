import React from 'react'

function Students() {
    let students = ['Hafeez', 'Khan', 'Zakria', 'Manzoor', 'Waqas'];
    let numbers = [1, 2, 3, 4, 5, 6];
       let result = numbers.map(num => <h1>{num = num *2}</h1>)
        

    return (
        <div>
        {result}
            {/* {students.map(std => <h1> {std} </h1> )} */}
            {/* {numbers.map(num => <h1>{num = num *2}</h1>)} */}

        </div>
    )
}

export default Students
