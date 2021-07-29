import  {Consumer}  from "./Context"
import { useState } from "react"

function Form(){
    const [input, setInputs] = useState({
        title : "",
        imgUrl : "",
        description : ""
    })

        
    
   const handleChange = (e) => {
       console.log(e)
       const {target:{name, value}} = e
        console.log(name,value)
        setInputs({
            ...input,
            [name] : value
        })
    }

    return(
        <Consumer>
            { context => {
                
               return (<>
                <label>What is this Ugly Thing? : </label>
                <input onChange={handleChange} value={input.title} name = "title"></input>

                <label>Link to Image</label>
                <input  onChange={handleChange}  value={input.imgUrl} name="imgUrl"></input>

                <label>Tell us more...</label>
                <input  onChange={handleChange} value={input.description} name="description"></input>

                <button onClick={(e) => context.addObject(e,input)}>Enter</button>
                </>
            )}}
        </Consumer>
    )
}

export default Form

