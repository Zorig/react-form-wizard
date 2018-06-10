import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import { Step, StepTwo, StepThree, Review } from './components'
import './style.css'

const App = () => (
  <div>
    <ul className="menu">
      <li>
        <NavLink exact to="/">
          Step 1
        </NavLink>
      </li>
      <li>
        <NavLink to="/2">Step 2</NavLink>
      </li>
      <li>
        <NavLink to="/3">Step 3</NavLink>
      </li>
      <li>
        <NavLink to="/4">Review</NavLink>
      </li>
    </ul>
    <section className="main">
      <Switch>
        <Route exact path="/" component={Step} />
        <Route exact path="/2" component={StepTwo} />
        <Route exact path="/3" component={StepThree} />
        <Route exact path="/4" component={Review} />
      </Switch>
    </section>
  </div>
)

export default App
