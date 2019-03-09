import React, { Component } from 'react'
import fire from '../../config/Fire';
import { Button } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Button onClick={this.logout}>Logout</Button>
            </div>

        )
    }
}


export default Home;