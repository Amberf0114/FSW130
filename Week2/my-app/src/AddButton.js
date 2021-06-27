import animals from './animals'
import {Context} from './Context'

function AddButton(props) {
    return(
        <Context>
           {/* {{(animals) => (
               <h1>{animals}</h1>
           )}} */}
          {({animals}) => (
              console.log(animals)
          )}
        </Context>
    )

}
// {newItem => (
//     <button className='addButton' onClick={newItem.onClick}>Add</button>
//     )}
export default AddButton