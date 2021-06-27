import './App.css';
import { Consumer } from './Context' 
// import Form from './Form'
import AddButton  from './AddButton';
function App() {
  return ( 
    <div>
      <AddButton />
    {/* <Consumer>
      {theme => (
        <Form />
      )}
    </Consumer> */}
    </div>


  );
}

export default App;
