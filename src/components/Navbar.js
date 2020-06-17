import React from 'react'
import { Home, Nav, Personajes, Episodios, Registro, List } from '../styled'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'



const Navbar = ({location: {pathname}}) => {
    return (
        pathname === '/' ? (<Nav>
            <List>
            <Home className={pathname === '/' && ('active')}>
                <Link style={{textDecoration: 'none'}}  to='/'>Home</Link>
            </Home>
            <Personajes className={pathname === '/personajes' && ('active')}>
                <Link style={{textDecoration: 'none'}} to='/personajes'>Personajes</Link>
            </Personajes>
            <Episodios className={pathname === '/episodes' && ('active')}>
            <Link style={{textDecoration: 'none'}} to='/episodios'>Episodios</Link>
            </Episodios>
            <Registro className={pathname === '/registro' && ('active')}>
            <Link style={{textDecoration: 'none'}} to='/registro'>Registro</Link>
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
    )
}

export default withRouter(Navbar)
