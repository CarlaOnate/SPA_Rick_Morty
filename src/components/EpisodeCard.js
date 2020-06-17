import React, {useState, useEffect} from 'react'
import {Card} from '../styled'
import { getChar } from '../servies'

const EpisodeCard = ({el}) => {
    const [show, setShow] = useState(false)
    const [state, setState] = useState([])

    // useEffect(() => {
    //     el.characters.map((el, ind) => {
    //         if (ind < 30) {
    //             getCharNum(el.slice(42)).then(({data: {values}}) => setCharac([...character, values]))
    //         }
    //     })
    // }, [])
    // useEffect(() => {
    //     getChar().then(({data: {results}}) => {
    //         setState(results)
    //         console.log(results)
    //         console.log(state)
    //     })
    // }, [state])

    return (
        <Card>
            <p>Name: {el.name}</p>
            <p>Air date: {el.air_date}</p>
            {show && (
            <>
                <p>Episode: {el.episode}</p>
                {/* <p>Characters: {el.characters.map((el, index) => {
                    return index < 30 && (
                        <ul>
                            <li></li>
                        </ul>
                    )
                })}</p> */}
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
