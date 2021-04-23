import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Jumbotron, Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handlerChange = (e) => {
        const {name, value} = e.target;

        setInput(prevInput => {
            return{
            ...prevInput,
            [name] : value 
            }
        })
    }

    let history =useHistory()

    const submitHandler = () => {

        const user = {
            username: input.username,
            email: input.email,
            password: input.password
        }

        axios.post("http://localhost:5000/createuser", user);
        history.push('/login')
    }

    return (
        <div>
        <Container>
        <Jumbotron>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    name="username"
                    placeholder="Enter username here"
                    value= {input.username}
                    onChange={handlerChange}
                />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="abc@gmail.com"
                    value= {input.email}
                    onChange={handlerChange}
                />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Create your password here"
                    value= {input.password}
                    onChange={handlerChange}
                />
            </Form.Group>

            <p>
            <Button variant="primary" onClick={ submitHandler }>SignUp</Button>
            </p>
        </Form>
        </Jumbotron>
        </Container>
        </div>
    )
}

export default Signup
