import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { addContact } from './contacts';

const initialState = {name: '', phone: '', email: ''}
function App(props) {
// const contacts = useSelector(state => state.addContact)
const dispatch = useDispatch()

const [inputs, setInputs] = useState(initialState)

const handleChange = (e) => {
  const {name, value} = e.target
  setInputs({
    ...inputs,
    [name] : value
  })
}

console.log('props=',props)
  return (
    <div className="App">
      <form>
        <input name='name' value={inputs.name} onChange={handleChange} />
        <input name='phone' value={inputs.phone} onChange={handleChange} />
      </form>
      <button onClick={() => dispatch(addContact(inputs))}>Add</button>

      <ul>
        {props.contact.contactInfo.map(item => {
          return(
            <li>
              <h1>{item.name}</h1>
              <p>{item.phone}</p>
              <button onChange={handleChange}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state)
  return({contact : state})
}

export default connect( mapStateToProps, { addContact })(App);
