import React, {useEffect, useState} from 'react'
import {getChar} from '../servies'
import {Cards} from '../styled'
import CharCard from './CharCard'

const Personajes = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        getChar().then(({data: {results}}) => {
            setState(results)
            console.log(results)
            console.log(state)
        })
    }, [state])

    return (
        <>
            <h1>Personajes</h1>
            <Cards>
                {state.map(el => (
                    <CharCard key={el.id} el={el}/>
                ))}
            </Cards>
        </>
    )
}

export default Personajes
