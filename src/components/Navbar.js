import React, {useState, useEffect} from 'react'
import { MyContext } from './Context'
import { Home, Nav, Personajes, Episodios, Registro, List } from '../styled'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <MyContext.Consumer>
    {context => {
        return (
        <>
        {context ?
        (<Nav>
            <List>
            <Home>
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
        </Nav>) :
            (<Nav style={{background: 'black', color: 'white'}}>
                <List>
                <Home>
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
            </Nav>)
        }
        </>
    )
    }}
    </MyContext.Consumer>
    )
}

export default Navbar
