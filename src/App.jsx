import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Spell from './components/Spell'
import SpellList from './components/SpellList'
import Monster from './components/Monster'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Welcome to my D&D Nerdy Domain</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Go Home</Link>
              </li>
              <li>
                <Link to="/sSearch">Spell Search</Link>
              </li>
              <li>
                <Link to="/monster">Monster Search</Link>
              </li>
              <li>
                <Link to="/slist">Spell List</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/monster" component={Monster} />
          <Route exact path="/slist" component={SpellList} />
          <Route exact path="/:spell" component={Spell} />
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}

export default App
