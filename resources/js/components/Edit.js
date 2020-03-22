import React, { Component } from 'react'
import axios from 'axios';

class Edit extends Component {

  constructor (props) {

    super(props)
    this.state = {
      name: '',
      description: '',

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
        const expenseObject = {
            name: this.state.name,
            description: this.state.description
          };
        axios.put('/api/expenses/' + this.props.match.params.id,expenseObject)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })

        this.props.history.push('/')


        this.setState({
            name: '',
            description: ''
        })
    }

  componentDidMount () {

    axios.get('/api/expenses/'+this.props.match.params.id)
    .then(response=>
      {this.setState({

        name:response.data.name,
        description:response.data.description

    })}
)

  }

  render () {
    return (
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            <form onSubmit={this.onSubmitButton}>
                                <strong>Name:</strong>
                                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChangeValue} />
                                <strong>Description:</strong>
                                <textarea className="form-control" name="description" value={this.state.description} onChange={this.onChangeValue}></textarea>
                                <button className="btn btn-success">Update</button>
                            </form>
                        </div>
                    </div>


    )
  }
}
export default Edit;

