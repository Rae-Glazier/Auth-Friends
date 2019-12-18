import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Friends from './friends';

function App() {
  return (
    <Router>
      <div className="App">
            <header className="App-header">
              The One With The Auth
            </header>

            <Friends />
          </div>
    </Router>
  )
}

export default App;
