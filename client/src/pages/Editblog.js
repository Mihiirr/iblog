import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Form } from 'react-bootstrap';

export default class EditBlog extends Component {
  constructor (props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeBody = this.onChangeBody.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      title: '',
      description: '',
      date: new Date()
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:5000/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          description: response.data.description,
          date: new Date(response.data.date)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  onChangeTitle (e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeBody (e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDate (date) {
    this.setState({
      date: date
    })
  }

  onSubmit (e) {
    e.preventDefault()

    const me = {
      title: this.state.title,
      description: this.state.description
    }

    console.log(me)

    axios
      .put(
        'http://localhost:5000/edit/' + this.props.match.params.id,
        me
      )
      .then(res => console.log(res.data))

    window.location = '/'
  }
  render () {
    return (
        <div className="createblog">
        <Jumbotron>
        <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    name="title"
                    placeholder="Blog-Title"
                    value= {this.state.title}
                    onChange={this.onChangeTitle}
                />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    placeholder="Blog-Description"
                    name="description"
                    value= {this.state.description}
                    rows={3}
                    onChange={this.onChangeBody}
                />
            </Form.Group>

            <div className='form-group'>
                <input type='submit' value=' save' className='btn btn-primary' />
            </div>
        </Form>
        </Jumbotron>
    </div>
    )
  }
}
// export default class EditBlog extends Component {
// constructor(props) {
//   super(props);

//   this.onChangeTitle = this.onChangeTitle.bind(this);
//   this.onChangeBody = this.onChangeBody.bind(this);
//   this.onChangeDate = this.onChangeDate.bind(this);
//   this.onSubmit = this.onSubmit.bind(this);

//   this.state = {
//     username: '',
//     description: '',
//     date: new Date(),
//   }
// }

// componentDidMount() {
//   axios.get('http://localhost:5000/api/blog'+this.props.match.params.id)
//     .then(response => {
//       this.setState({
//         title: response.data.title,
//         body: response.data.body,
//         date: new Date(response.data.date)
//       })
//     })
//     .catch(function (error) {
//       console.log(error);
//     })

// }

// onChangeTitle(e) {
//   this.setState({
//     title: e.target.value
//   })
// }

// onChangeBody(e) {
//   this.setState({
//     body: e.target.value
//   })
// }

// onChangeDate(date) {
//   this.setState({
//     date: date
//   })
// }

// onSubmit(e) {
//   e.preventDefault();

//   const me = {
//     title: this.state.title,
//     body: this.state.body,
//     date: this.state.date
//   }

//   console.log(me);

//   axios.post('http://localhost:5000/api/blog/edit' + this.props.match.params.id, me)
//     .then(res => console.log(res.data));

//   window.location = '/api/blogs';
// }
// }

// //   render () {
// //       return (
//         <div>
//         <h3>Edit Blog</h3>
//         <form onSubmit={this.onSubmit}>
//         <div className='form-group'>
//             <label>Title: </label>
//             <input
//             type='text'
//             required
//             className='form-control'
//             value={this.state.title}
//             onChange={this.onChangeTitle}
//             />
//             <label>Body: </label>
//             <input
//             type='text'
//             required
//             className='form-control'
//             value={this.state.body}
//             onChange={this.onChangeBody}
//             />
//             <div className='form-group'>
//             <label>Date: </label>
//             <div>
//                 <Moment
//                 selected={this.state.date}
//                 onChange={this.onChangeDate}
//                 />
//             </div>
//             </div>
//         </div>
//         <div className='form-group'>
//             <input
//             type='submit'
//             value='Edit Blog'
//             className='btn btn-primary'
//             />
//         </div>
//         </form>
//     </div>

//       )
//   }
// export default class EditBlog extends Component {
//   constructor (props) {
//     super(props)

//     this.onChangeTitle = this.onChangeTitle.bind(this)
//     this.onChangeBody = this.onChangeBody.bind(this)
//     this.onChangeDate = this.onChangeDate.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)

//     this.state = {
//       title: '',
//       body: '',
//       date: new Date()
//     }
//   }

//   onChangeTitle (e) {
//     this.setState({
//       title: e.target.value
//     })
//   }

//   onChangeBody (e) {
//     this.setState({
//       body: e.target.value
//     })
//   }

//   onChangeDate (date) {
//     this.setState({
//       date: date
//     })
//   }

//   onSubmit (e) {
//     e.preventDefault()

//     const me = {
//       title: this.state.title,
//       body: this.state.body
//     }

//     console.log(me)

//     axios
//       .put('http://localhost:5000/blog/edit/'+ this.props.match.params.id, me)
//       .then(res => console.log(res.data))

//     window.location = '/api/blogs/'
//   }
