import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { addFood , removeFood } from './SuperFoods';

const initialState = {food: '', superPower: ''}
function App(props) {

  const dispatch = useDispatch()

  const [inputs, setInputs] = useState(initialState)

  const handleChange = (e) => {
  const {name, value} = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const handleDelete = (e) => {
    console.log(removeFood)
    dispatch(removeFood(inputs))
    console.log(props)
  }

  return (
    <div className="App">
      <form>
        <input name='food' value={inputs.food} onChange={handleChange} />
        <input name='superPower' value={inputs.superPower} onChange={handleChange} />
      </form>
      <button onClick={() => dispatch(addFood(inputs))}>Add</button>

      <ul>
        {props.food.foodInfo.map(item => {
          return(
            <li>
              <h1>{item.food}</h1>
              <p>{item.superPower}</p>
              <button onClick={(e) => {
                handleDelete(item)
              }}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}


export default connect( state => {
  console.log(state)
  return({food : state})
}, { addFood })(App);