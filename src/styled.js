import style from 'styled-components'

export const Nav = style.nav`
    background: transparent;
`

export const List = style.nav`
    .active{
        color: red;
    }
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
    text-decoration: none;

`

export const Personajes = style.li`
    place-self: center;
    grid-area: personajes;
    text-decoration: none;


`

export const Episodios = style.li`
    place-self: center;
    grid-area: episodios;
    text-decoration: none;


`

export const Registro = style.li`
    place-self: center;
    grid-area: registro;
    text-decoration: none;

`

export const CharDiv = style.div`
    overflow-y: scroll;
`

export const EpisodesCards = style.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: '. cards .'
`

export const CharCards = style.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: '. cards .'
`

export const Cards = style.div`
    grid-area: cards;
    display: flex;
    width: 90vw;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
`

export const Card = style.div`
    display: flex;
    width: 30%;
    max-height: 300px;
    padding: 10px;
    flex-direction: column;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

export const RegistroForm = style.form`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 100px 200px 50px;
    grid-template-areas: '. . .'
                         '. form .'
                         '. button .'
`

export const FormInputs = style.div`
    grid-area: form;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`