import React, {useEffect, useState} from 'react'
import {getEpisodes} from '../servies'
import { Cards, EpisodesCards} from '../styled'
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
        <h1>EpisodesCards</h1>
        <EpisodesCards>
        <Cards>
            {state.map(el => (
                        <EpisodeCard key={el.id} el={el}/>
            ))}
        </Cards>
        </EpisodesCards>
        </>
    )
}

export default Episodes
