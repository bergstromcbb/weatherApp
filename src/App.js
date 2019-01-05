import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Header from "./components/header";
import HomeContainer from './containers/homeContainer';
import ForecastContainer from './containers/forecasetContainer';
import DetailContainer from './containers/DetailContainer';
import history from './history'

class App extends Component {

  render() {
    return (
      <Router history={history}>
      <div className="App">
        <Header/>
        <Route exact path="/" component={HomeContainer} />
        <Route path='/forecast/:location' component={ForecastContainer} />
        <Route path='/detail' component={DetailContainer} />
\
     </div>
    </Router>
    );
  }
}

export default App;
