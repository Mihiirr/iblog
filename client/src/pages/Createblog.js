import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Jumbotron, Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';

function Createblog() {
    const [input, setInput] = useState({
        title: '',
        description: ''
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
        const newBlog = {
            title: input.title,
            description: input.description
        }

        axios.post("http://localhost:5000/createblog", newBlog);
        history.push('/')
    }

    return (
        <div className="createblog">
        <Container>
            <Jumbotron>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="title"
                        placeholder="Blog-Title"
                        value= {input.title}
                        onChange={handlerChange}
                    />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Blog-Description"
                        name="description"
                        value= {input.description}
                        rows={3}
                        onChange={handlerChange}
                    />
                </Form.Group>

                <p>
                <Button variant="primary" onClick={ submitHandler }>Submit</Button>
                </p>
            </Form>
            </Jumbotron>
            </Container>
        </div>
    )
}

export default Createblog
