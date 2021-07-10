import React, {useState} from 'react'
import animal from './animals'

const {Provider, Consumer} = React.createContext()

function Context(props) {
    
    const [animals, setAnimals] = useState(animal)
    const [inputs, setInputs] = useState({ class: "", name:"" })

    function handleClick(e) {
    e.preventDefault()
        console.log("this click worked")
    setAnimals([...animals, inputs])
    //how to bring in state using hooks?

}
function handleChange(e) {
    console.log(e.target)
    const { name , value} = e.target
    
    //code to create an element with user input data
    setInputs({ ...inputs, [name] : value})
}
    return(
        <Provider value = {{animals, handleClick, handleChange, inputs}} > {/*blackhole*/}
            {props.children}
        </Provider>
    )
}

export { Context, Consumer }