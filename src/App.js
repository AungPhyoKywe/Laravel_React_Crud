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

      <div style={{backgroundColor : '#242582'}}className="container">

<<<<<<< HEAD
=======
            <nav className=" rounded navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">နောက်ဆုံးကိုရိုနာဗိုင်ရပ် : {this.state.day} </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  
                </ul>
>>>>>>> 992b30c7bcd178526cb2a5b4cf137df12c28bec4
            

                <div className=" shadow p-3 mb-5 bg-white rounded card">
                    <div className="card-header"><h2>စုစုပေါင်းကူးစက်ပြန်နှံ့နေသောနိုင်ငံများ</h2></div>
                      <div className="card bg-light text-black card-body">
                      
                      <center><h1>{this.state.results}</h1></center>
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
                    <div className="card-header">ကူစက်ခံရသူ</div>
                    <div className="card bg-warning text-white card-body">
                      
                      <h2>{this.state.total}</h2>
                    </div> 
                    </div>
                </div>

                <div className="col-3">
                  <div className="shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">ပြန်လဲသက်သာလာသူ</div>
                    <div className="card bg-success text-white card-body ">
                      
                      <h2>{this.state.recovered}</h2>
                    </div> 
                    </div>
                </div>

                <div className="col-3">
                  <div className=" shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">အသစ်ထက်တွေ့မှု</div>
                    <div className="card bg-primary text-white card-body ">
                      
                      <h2>{this.state.new}</h2>
                    </div> 
                    </div>
                </div>

                <div className="col-3">
                  <div className=" shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">သေဆုံးသူ</div>
                    <div className="card bg-danger text-white card-body">
                      
                      <h2>{this.state.deaths}</h2>
                    </div> 
                    </div>
                </div>
                

            </div>
            

      </div>
       
    );

  }
}
