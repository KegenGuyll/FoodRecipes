import React, { Component } from 'react';
import Navbar from './components/Navigation/navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Account from './components/Account/account'
import Favorites from './components/Favorites/favorites'
import Search from './components/Search/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar>
            <Route path='/' exact component={Home}></Route>
            <Route path='/account' component={Account}></Route>
            <Route path='/favorites' component={Favorites}></Route>
            <Route path='/search' component={Search}></Route>
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default App;
