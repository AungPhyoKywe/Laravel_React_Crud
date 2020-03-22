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
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={Display} />
                <Route path='/create' component={Create} />
                <Route path='/edit/:id' component={Edit} />
              </Switch>
            </div>
          </BrowserRouter>
        )
      }


}
export default App;
if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
