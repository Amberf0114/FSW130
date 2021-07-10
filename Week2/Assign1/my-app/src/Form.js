//Consume Context
//Accept User input
//ADD User INPUT to ARRAY
//State initialized here
//Use Hooks
import {useState} from 'react'
//import Context from './Context' ---------Will this benefit my FORM at all??? GARY SAID probably not
import Animals from './animals'
import AddButton from './AddButton'


//Accept input


//Display user input when ADD button is clicked
// function handleClick(e) {
//     e.preventDefault()

//     const { name , value} = e.target
//     //how to bring in state using hooks?
// }

//Form to render the above

function Form() {
    //Declaring state
    const [animals, setAnimals] = useState({Animals})  //This is wrong

    return(
        <div>
            <form>

                <input type = 'text'  value = ''  placeholder = 'Write Your Favorite Animal HERE' onChange = { handleChange() }></input>
            
            </form>
            
            <AddButton type = 'submit'  />
        </div>
    )
}
//onClick = { handleClick() }
export default Form