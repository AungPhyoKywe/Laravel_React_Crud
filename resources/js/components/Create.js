import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class Create extends Component
{

constructor()
{
    super();
    this.onChangeTitleName=this.onChangeTitleName.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        title_name:''
    }
}

onChangeTitleName(e)
{
    this.setState({title_name:e.target.value});
}

onSubmit(e)
{
    e.preventDefault();
    const title=
    {
        title_name:this.state.title_name
    }
    axios.post('http://127.0.0.1:8000/api/task/','jj')
    .then(res=>console.log(title));

}

render() {
    return (
        <div className="container">
            <form onSubmit={this.onSubmit}>

                <div class="form-group row">
                     <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"
                            id="title_name"
                            value={this.state.title_name}
                            onChange={this.onChangeTitleName}
                            placeholder="Enter Title"/>
                        </div>
                </div>
                <div className="form-group row">
                    <button className="form-control btn btn-primary"type="submit">save</button>

                </div>
        </form>
        </div>
    );
}

}
