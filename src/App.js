import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from "./components/header";
import HomeContainer from './containers/homeContainer';
import ForecastContainer from './containers/forecasetContainer';
import DetailContainer from './containers/DetailContainer';
import history from './history'

class App extends Component {

  render() {
    return (
      <HashRouter history={history}>
      <div className="App">
        <Header/>
        <Route exact path="/" component={HomeContainer} />
        <Route path='/forecast/:location' component={ForecastContainer} />
        <Route path='/detail' component={DetailContainer} />
     </div>
    </HashRouter>
    );
  }
}

export default App;
