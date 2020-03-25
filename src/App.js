import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends React.Component
{


  state = {

    confirmed:0,
    recovered:0,
    deaths:0,
    countries:[],
  }

  componentDidMount()
  {
    axios.get("https://covid-193.p.rapidapi.com/statistics",{ headers:  {'x-rapidapi-key' : '1ba4788a8dmshad1c43e94c4c80cp12ce7djsn4a047e8ff6fa'}  })
    .then(res => {
      const countries = res.data
      this.setState({ countries });
    })
  }
  

  
  render()
  {

    return(

      <div className="container">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">World Corona Updated</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  
                </ul>
            
              </div>
            </nav><br/><br/>

            <select className="form-control">

             
            </select>
            <br/><br/>
            <div className="row">
                <div className="col-4">
                  <div className="card">
                    <div className="card-header">Confirmed</div>
                    <div className="card bg-warning text-white card-body">
                      
                      {/* {this.state.confirmed} */}
                    </div> 
                    </div>
                </div>

                <div className="col-4">
                  <div className="card">
                  <div className="card-header">Recovered</div>
                    <div className="card bg-primary text-white card-body ">
                      
                      {/* {this.state.recovered} */}
                    </div> 
                    </div>
                </div>

                <div className="col-4">
                  <div className="card">
                  <div className="card-header">Deaths</div>
                    <div className="card bg-danger text-white card-body">
                      
                      {/* {this.state.deaths} */}
                    </div> 
                    </div>
                </div>
                

            </div>

      </div>
       
    );

  }
}
