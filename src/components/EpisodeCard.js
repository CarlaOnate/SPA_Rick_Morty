import React, {useState, useEffect} from 'react'
import {Card} from '../styled'
import { getChar, getCharNum } from '../servies'

const EpisodeCard = ({el}) => {
    const [show, setShow] = useState(false)
    const [state, setState] = useState([])

    // useEffect(() => { Chrome cannot handle large request in short period of time!
    //     el.characters.map((el, ind) => {
    //         if (ind < 30) {
    //             getCharNum(el.slice(42)).then(({data: {values}}) => setState([...state, values]))
    //         }
    //     })
    // }, [state, el.characters])

        useEffect(() => {
        el.characters.map((el, ind) => {
            if (ind < 10) {
                getCharNum(el.slice(42)).then(({data}) => setState((prev) => [...prev, data]))
            }
        })
        }, [])

    return (
        <Card>
            <p>Name: {el.name}</p>
            <p>Air date: {el.air_date}</p>
            {show && (
            <>
                <p>Episode: {el.episode}</p>
                <div>Characters: 
                <ul>
                {state.map((el) => {
                    return (
                            <li key={el.id}>{el.name}</li>
                    )
                })}
                </ul>
                </div>
                {el.type && (
                    <p>Type: {el.type}</p>
                )}
            </>
            )}
            <button onClick={() => setShow(!show)}>{show ? ('Less info') : ('More info')}</button>
        </Card>
    )
}

export default EpisodeCard
