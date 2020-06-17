import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Personajes from './components/Personajes';
import Episodes from './components/Episodes';
import Registro from './components/Registro';


const Router = () => (
  <BrowserRouter>
    <Navbar style={{background: 'black', color: 'white'}}/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/personajes" component={Personajes} />
      <Route exact path="/episodios" component={Episodes} />
      <Route exact path="/registro" component={Registro} />
    </Switch>
  </BrowserRouter>
)

export default Router;