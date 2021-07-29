import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import './App.css';
import Tv_Shows from './Tv_ShowsList';
import Movies from './MovieList';
import {Provider} from 'react-redux'
import store from './Redux/Combine';
import Home from './Home'

function App() {
  return (

    <Router>
        <Provider store={store}>
            <div className="App">
              <Nav/>
                    
                <div>
                  <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/tvshows'><Tv_Shows/></Route>
                    <Route exact path='/movies'><Movies/></Route>

                  </Switch> 
                </div>
            </div>
        </Provider>
    </Router>
  );
}

export default App;
