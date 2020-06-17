import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'

export const MyContext = createContext()

class MyProvider extends Component{
    state = {
        nav: true
    }

    setNav = () => {
      this.setState({nav: false})
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
        export default withRouter(MyProvider)
