import React, {useState} from 'react'
import {Card} from '../styled'

const CharCard = ({el}) => {
    const [show, setShow] = useState(false)

    return (
        <Card>
            <p>Name: {el.name}</p>
            <p>Location: {el.location.name}</p>
            {show && (
            <>
                <p>Gender: {el.gender}</p>
                <p>Species: {el.species}</p>
                <p>Status: {el.status}</p>
                {el.type && (
                    <p>Type: {el.type}</p>
                )}
            </>
            )}
            <button style={{margin: '10px'}} onClick={() => setShow(!show)}>{show ? ('Less info') : ('More info')}</button>
        </Card>
    )
}

export default CharCard
