import animals from './animals'
import {Consumer} from './Context'

function Form(props) {
    return(
        <Consumer>
          {({animals, handleClick, inputs, handleChange}) => {
              console.log(animals)
              return(
                  
                <div>
                     <form>

                        <input type = 'text'  value = {inputs.class} 
                        name="class" 
                        placeholder = "Write Your Favorite Animal's class HERE"
                        onChange = { handleChange }></input>

                        <input type = 'text'  value = {inputs.name} 
                        name="name" 
                        placeholder = 'Write Your Favorite Animal HERE' 
                        onChange = { handleChange }></input>
                        
                        <button className='addButton' onClick={handleClick}>Add</button>

                    </form>
                    
                {animals.map(animal => (
                    <div className='list' key = {animals.name}>
                       <span>Class: {animal.class}</span> 
                       <br></br>
                      <span>  Animal: {animal.name}</span> 

                    </div>))}
                </div>
              )
            }}
        </Consumer>
    )

}

export default Form