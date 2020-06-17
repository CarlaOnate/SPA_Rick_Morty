import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Personajes from './components/Personajes';


const Router = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/personajes" component={Personajes} />
    </Switch>
  </>
)

export default Router;