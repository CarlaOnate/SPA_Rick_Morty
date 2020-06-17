import style from 'styled-components'

export const Nav = style.nav`
    background: none;
`

export const List = style.nav`
    list-style: none;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    grid-template-rows: 50px;
    grid-template-areas: 'home . personajes episodios registro'
`

export const Home = style.li`
    place-self: center;
    grid-area: home;
`

export const Personajes = style.li`
    place-self: center;
    grid-area: personajes;
`

export const Episodios = style.li`
    place-self: center;
    grid-area: episodios;
`

export const Registro = style.li`
    place-self: center;
    grid-area: registro;
`

export const Cards = style.div`
    display: flex;
    width: 90vw;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
`

export const Card = style.div`
    display: flex;
    width: 30%;
    padding: 10px;
    flex-direction: column;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
