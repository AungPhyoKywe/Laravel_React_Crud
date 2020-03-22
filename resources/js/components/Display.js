import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Display extends Component {


    constructor (props) {
        super(props)
        this.state = {

          value:[],
        }
        this.handleDelete = this.handleDelete.bind(this);


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

      handleDelete(id) {

        // remove from local state
        const isNotId = response => response.id !== id;
        const updatedTasks = this.state.value.filter(isNotId);
        this.setState({ value: updatedTasks });
        // make delete request to the backend
        axios.delete(`api/expenses/${id}`);
    }
    render()
    {
        return(

            <div className="card">

                <div className="card-body">
                <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Id</th>
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
                                            <th scope="row">{response.id}</th>
                                            <td>{response.name}</td>
                                            <td>{response.description}</td>
                                            <td>
                                                <button className="btn-sm  btn-success"><Link to={"/edit/"+response.id}>edit</Link></button>
                                                <button  className="btn-sm  btn-danger" onClick={() => this.handleDelete(response.id)}>delete</button>

                                            </td>
                                            </tr>
                                      )
                                    })
                                }


                            </tbody>
                        </table>
                </div>
            </div>
        );
    }



}

export default Display;

