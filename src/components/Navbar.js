import React from 'react'
import Home from './Home'
import { Nav, Personajes, Episodios, Registro, List } from '../styled'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Nav>
         <List>
            <Home>
                {/* <Link to='/</Home>'><img alt='logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthesnootyushers.files.wordpress.com%2F2017%2F04%2Frick-and-morty-logo.png%3Fw%3D750&f=1&nofb=1'/></Link> */}
                <Link to='/'>Home</Link>
            </Home>
            <Personajes>
                <Link to='/personajes'>Personajes</Link>
            </Personajes>
            <Episodios>
            <Link to='/episodios'>Episodios</Link>
            </Episodios>
            <Registro>
            <Link to='/registro'>Registro</Link>
            </Registro>
         </List>
        </Nav>
    )
}

export default Navbar
