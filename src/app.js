import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import objectives from './components/objectives';
import baseline from './components/baseline';
import yearOne from './components/yearOne';
import yearTwo from './components/yearTwo';
import participants from './components/participants';

import Navbar from './components/utility/navbar';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/objectives" component={objectives}/>
              <Route path="/baseline" component={baseline}/>
              <Route path="/yearOne" component={yearOne}/>
              <Route path="/yearTwo" component={yearTwo}/>
              <Route path="/participants" component={participants}/>
            </Switch>
          </main>
          <footer>
            <p>Visit us at care.ca</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
