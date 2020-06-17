import React, {useEffect, useState} from 'react'
import {getEpisodes} from '../servies'
import { Cards} from '../styled'
import EpisodeCard from './EpisodeCard'

const Episodes = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        getEpisodes().then(({data: {results}}) => {
            setState(results)
            console.log(results)
            console.log(state)
        })
    }, [state])

    return (
        <>
        <h1>Episodes</h1>
        <Cards>
            {state.map(el => (
                        <EpisodeCard key={el.id} el={el}/>
            ))}
        </Cards>
        </>
    )
}

export default Episodes
