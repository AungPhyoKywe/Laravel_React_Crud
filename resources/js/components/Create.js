import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class Create extends Component
{

constructor(props)
{
    super(props);
    this.onChangeTitleName = this.onChangeTitleName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        title_name: ''
    }
}

onChangeTitleName(e)
{

    this.setState({
        title_name: e.target.value

    });
}

onSubmit(e)
{

     e.preventDefault();
    // const title=
    console.log(this.state.title_name);
    this.setState({
        title_name: '',

      })
    // {
    //     title_name:this.state.title_name
    // }
    // axios.post('http://127.0.0.1:8000/api/task/','jj')
    // .then(res=>console.log(title));

}

render() {
    return (
        <div class="container">
            <form onSubmit={this.onSubmit}>

                <div class="form-group row">
                     <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"

                            value={this.state.title_name}
                            onChange={this.onChangeTitleName}
                            placeholder="Enter Title"/>
                        </div>
                </div>
                <div class="form-group row">
                    <input type="submit" class="form-control btn btn-primary" value="save"/>

                </div>
        </form>
        </div>
    );
}

}
