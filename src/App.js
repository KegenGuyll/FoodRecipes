import React, { Component } from "react";
import Navbar from "./components/Navigation/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Account from "./components/Account/account";
import Favorites from "./components/Favorites/favorites";
import Search from "./components/Search/search";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.setState(() => ({ user: this.props.user }));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar>
            <Route path="/" exact component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/search" component={Search} />
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default App;
