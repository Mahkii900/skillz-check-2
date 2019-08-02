import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import routes from './routes'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <Header/>
        </div>
        {routes}
      </HashRouter>
    )
  }
}

export default App;
