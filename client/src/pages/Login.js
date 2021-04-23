import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Jumbotron, Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {

    const [input, setInput] = useState({
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
            email: input.email,
            password: input.password
        }

        axios.post("http://localhost:5000/login", user);
        history.push('/bloglist')
    }

    return (
        <div>
        <Container>
        <Jumbotron>
        <Form>
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
            <Button variant="primary" onClick={ submitHandler }>Login</Button>
            </p>
        </Form>
        </Jumbotron>
        </Container>
        </div>
    )
}

export default Login
