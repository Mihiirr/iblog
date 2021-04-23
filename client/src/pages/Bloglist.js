import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import './Bloglist.css'
import axios from 'axios';

const Blog = props => (
    <tr>
      <td>{props.blog.title}</td>
      <td>{props.blog.description}</td>
      <td>{props.blog.date.substring(0, 10)}</td>
      <td>
        <Button
          size='sm'
          block
          variant='outline-primary'
          href={'/edit/' + props.blog._id}
        >
          {' '}
          edit{' '}
        </Button>{' '}
        <Button
          block
          variant='outline-danger'
          size='sm'
          href='#'
          onClick={() => {
            props.deleteBlog(props.blog._id)
          }}
        >
          delete
        </Button>
      </td>{' '}
    </tr>
  )
  
  export default class BlogList extends Component {
    constructor (props) {
      super(props)
  
      this.deleteBlog = this.deleteBlog.bind(this)
  
      this.state = { blog: [] }
    }
  
    componentDidMount () {
      axios
        .get('http://localhost:5000/')
        .then(response => {
          this.setState({ blog: response.data })
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    deleteBlog (id) {
      axios
        .delete('http://localhost:5000/delete/' + id)
        .then(response => {
          console.log(response.data)
        })
  
      this.setState({
        blog: this.state.blog.filter(el => el._id !== id)
      })
    }
  
    blogList () {
      return this.state.blog.map(currentblog => {
        return (
          <Blog
            blog={currentblog}
            deleteBlog={this.deleteBlog}
            key={currentblog._id}
          />
        )
      })
    }
  
    render () {
      return (
        <div>
          <Table striped bordered hover>
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>{' '}</th>
              </tr>
            </thead>
            <tbody>
              { this.blogList() }
            </tbody>
          </Table>
        </div>
      )
    }
  }