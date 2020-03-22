import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';

class Example extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      value:[],
    }

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
  }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitButton(e) {
        e.preventDefault();

        axios.post('/api/expenses', {
            name: this.state.name,
            description: this.state.description
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

        this.setState({
            name: '',
            description: ''
        })
    }

  componentDidMount () {

    axios.get('/api/expenses')
    .then(response=>
      {this.setState({

        value:response.data

    })}
       )
    ;

  }

  render () {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <a className="navbar-brand" href="#">ReactJs+Laravel</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                    <a className="nav-item nav-link" href="#">Features</a>
                                    <a className="nav-item nav-link" href="#">Pricing</a>
                                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                                </div>
                                </div>
                            </nav>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.state.value.map(response=>{


                                      return (


                                            <tr>
                                            <th scope="row">1</th>
                                            <td>{response.name}</td>
                                            <td>{response.description}</td>
                                            <td>
                                                <a href="" className="btn-sm  btn-success">edit</a>
                                                <a href="" className="btn-sm  btn-danger">delete</a>

                                            </td>
                                            </tr>
                                      )
                                    })
                                }


                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            <form onSubmit={this.onSubmitButton}>
                                <strong>Name:</strong>
                                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChangeValue} />
                                <strong>Description:</strong>
                                <textarea className="form-control" name="description" value={this.state.description} onChange={this.onChangeValue}></textarea>
                                <button className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}
export default Example;
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
