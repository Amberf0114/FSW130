import React, { useEffect } from 'react'
import Buttons from './Buttons'

//Component to display the stopwatch

// const redux = require("redux")

let time = new Date(0)
let secs = time.getSeconds()
let mins = time.getMinutes()
let mili = time.getMilliseconds()

//code to make timer count 

// useEffect(() => {
//     const interval = setInterval(1000)
//     return() => clearInterval(interval)
// }, [])

//component using props to add in functionality of stopwatch and button component
function Display(props) {
    return(
        <div>
            <h1>{props.time}</h1>
            <Buttons />
        </div>
    )
}

export default Display