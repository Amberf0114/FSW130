import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './SuperFoods'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import SuperFoods from './SuperFoods'
import Home from './Home'
import Caution from './Caution'


ReactDOM.render(
  <Provider store ={store}>
      <Router>
        <div>
          <Nav/>
            <div>
              <Switch>
                <Route exact path='/sfoods'><SuperFoods/></Route>
                <Route exact path='/'><Home/></Route>
                <Route exact path='/caution'><Caution/></Route>
              </Switch>
            </div>
        </div>
      </Router>
      <App />
  </Provider>,
  document.getElementById('root')
);