import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import {signup, logout, login, signupVet} from './services'

export const MyContext = createContext()

class MyProvider extends Component{
    state = {
        nav: true
    }

    render(){
          return(
            <MyContext.Provider
            value={
              this.state.nav
            }
            >
              {this.props.children}
            </MyContext.Provider>
          )}

}