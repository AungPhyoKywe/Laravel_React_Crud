import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Display from './Display';
import Create from './Create';
import Edit from './Edit';


class App extends Component {

    render () {
        return (
          <BrowserRouter>
            <div className="container">
                <div className="card">
                    <div className="card-body shadow-lg p-3 mb-5 bg-white rounded border border-secondary">
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Display} />
                            <Route path='/create' component={Create} />
                            <Route path='/edit/:id' component={Edit} />
                        </Switch>
                    </div>
                </div>
            </div>
          </BrowserRouter>
        )
      }


}
export default App;
if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
