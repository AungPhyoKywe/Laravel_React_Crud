import React from 'react';
import axios from 'axios';
import styles from './App.module.css';
import { Line, Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.css';
import image from './images/image.png';
import CountUp from 'react-countup';


export default class App extends React.Component
{


  state = {

    new:0,
    total:0,
    deaths:0,
    recovered:0,
    results:0,
    count:'',
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

    this.setState({
      count:currentCountry.target.value
    })
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
        day:date,
        
        
        });
    })
  }
  

  
  render()
  {

    return(
      <div className="container">
            
            <div className="row">
                <div className="col-sm">
                  <div className=" shadow p-3 mb-5 bg-white rounded card">
                    <div className="card-header">ကူစက်ခံရသူ</div>
                    <div className="card bg-warning text-white card-body">
                      
                    <h2><CountUp start={0} end={this.state.total} duration={2.75} separator="," /></h2>
                    </div> 
                    </div>
                </div>

                <div className="col-sm">
                  <div className="shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">ပြန်လဲသက်သာလာသူ</div>
                    <div className="card bg-success text-white card-body ">
                      
                      <h2><CountUp start={0} end={this.state.recovered} duration={2.75} separator="," /></h2>
                    </div> 
                    </div>
                </div>

                <div className="col-sm">
                  <div className=" shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">အသစ်ထက်တွေ့မှု</div>
                    <div className="card bg-primary text-white card-body ">
                      
                      <h2><CountUp start={0} end={this.state.new} duration={2.75} separator="," /></h2>
                    </div> 
                    </div>
                </div>

                <div className="col-sm">
                  <div className=" shadow p-3 mb-5 bg-white rounded card">
                  <div className="card-header">သေဆုံးသူ</div>
                    <div className="card bg-danger text-white card-body">
                      
                      <h2><CountUp start={0} end={this.state.deaths} duration={2.75} separator="," /></h2>
                    </div> 
                    </div>
                </div>

                
                

            </div>

            <div className="row">
              <div className="col-sm">
              <center>
            <select onChange={this.handleChange}style={{ width:300 }} className="form-control">
            {

              this.state.countries.map(res =>
                <option value={res.country}>{res.country}</option>
                )
            }
             
            </select>
            </center>
              </div>

              <div className="col-sm">
              <img className={styles.image} src={image} alt="COVID-19" />

              </div>
            </div>
            <Bar
        data={{
          labels: ['ကူစက်ခံရသူ', 'ပြန်လဲသက်သာလာသူ', 'သေဆုံးသူ'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [this.state.total, this.state.recovered,this.state.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${this.state.count}` },
        }}
      />
      

        <center><p><em><i>develop by apk</i></em></p></center>

      </div>
       
    );

  }
}
