import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class table extends Component {
constructor()
 {
     super();
     this.state=
     {
         title:[]
     }

 }

 componentDidMount()
 {
     axios.get('http://localhost:8000/api/task')
     .then(response=>
       {this.setState({title:response.data})}
        )
     ;
 }

render() {
    return (

            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Create_at</th>
      <th scope="col">Updated_at</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
      {
          this.state.title.map(response=>{


            return (

                <tr>
                <th scope="row">{response.id}</th>
                <td>{response.title}</td>
                <td>{response.created_at}</td>
                <td>{response.updated_at}</td>
                <td>
                <a href=""className="btn-sm btn-success">edit</a>
                <a href=""className="btn-sm btn-danger">delete</a>
                </td>

                </tr>
            )
          }

          )
}

  </tbody>
</table>

    );
}
}


