import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends React.Component
{


  state = {

    new:0,
    total:0,
    deaths:0,
    recovered:0,
    results:0,
    countries:[],
    currentCountry:'',

    day:0,
  }

  componentDidMount()
  {
  
    axios.get("https://covid-193.p.rapidapi.com/statistics",{ headers:  {'x-rapidapi-key' : '1ba4788a8dmshad1c43e94c4c80cp12ce7djsn4a047e8ff6fa'}  })
    .then(res => {
      const countries = res.data.response
      const results = res.data.results
    
      //console.log(results);
      this.setState({ countries ,results:results
      
      });
    })

    
    

  }

  handleChange = (currentCountry) => {
    console.log(currentCountry.target.value)
    this.setState({ currentCountry : currentCountry.target.value});
    //console.log(this.state.currentCountry);
    axios.get(`https://covid-193.p.rapidapi.com/statistics?country=${currentCountry.target.value}`,{ headers:  {'x-rapidapi-key' : '1ba4788a8dmshad1c43e94c4c80cp12ce7djsn4a047e8ff6fa'}  })
    .then(res => {
      const date = res.data.response[0].day
      const cases = res.data.response[0].cases
      const de= res.data.response[0].deaths
      console.log(res.data.response[0]);
      this.setState({ 
        new :cases.new,
        total:cases.total,
        recovered:cases.recovered,
        deaths:de.total,
        day:date
        
        });
    })
  }
  

  
  render()
  {

    return(

      <div className="shadow p-3 mb-5 bg-white rounded  container border border-primary">

            

                <div className=" shadow p-3 mb-5 bg-white rounded card">
                    <div className="card-header">Total Country</div>
                      <div className="card bg-light text-black card-body">
                      
                      <center><h2>{this.state.results}</h2></center>
                      </div> 
                </div>
            

            <select onChange={this.handleChange} className="form-control">
            {

              this.state.countries.map(res =>
                <option value={res.country}>{res.country}</option>
                )
            }
             
            </select>
            
            
            <div className="row">
                <div className="col-3">
                  <div className=" shadow p-3 mb-5 bg-white rounded card">
                    <div className="card-header">Confirmed</div>
                    <div className="card bg-warning text-white card-body">
                      
                      {this.state.total}
                    </div> 
                    </div>
                </div>

                <div className="col-3">
                  <div className="shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">Recovered</div>
                    <div className="card bg-success text-white card-body ">
                      
                      {this.state.recovered}
                    </div> 
                    </div>
                </div>

                <div className="col-3">
                  <div className=" shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">New</div>
                    <div className="card bg-primary text-white card-body ">
                      
                      {this.state.new}
                    </div> 
                    </div>
                </div>

                <div className="col-3">
                  <div className=" shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">Deaths</div>
                    <div className="card bg-danger text-white card-body">
                      
                      {this.state.deaths}
                    </div> 
                    </div>
                </div>
                

            </div>
            

      </div>
       
    );

  }
}
