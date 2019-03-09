import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import fire from '../../config/Fire'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log(error)
            })
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log(error)
            })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container>
                <br />
                <Form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control value={this.state.email} onChange={this.handleChange} type='email' name="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={this.login} type="submit">Submit</Button>
                    <Button variant="primary" onClick={this.signup} type="submit">Register</Button>
                </Form>
            </Container>
        )
    }

}



export default Login;