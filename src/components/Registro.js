import React, {useState} from 'react'

const Registro = () => {
    const [state, setState] = useState({name: '', email: '', password: ''})
    const [registered, setRegistered] = useState(false)

    const handleInputs = (e) => {
        const {name, value} = e.target
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
        console.log(state)
    }

    const submit = (e) => {
        e.preventDefault()
        setRegistered(true)
    }

    return (
        <>
            <form onSubmit={(e) => submit(e)}>
                <label>Name</label>
                <input name='name' onChange={e => handleInputs(e)} placeholder='name'/>
                <label>Email</label>
                <input name='email' onChange={e => handleInputs(e)} placeholder='email'/>
                <label>Password</label>
                <input name='password' onChange={e => handleInputs(e)} placeholder='password'/>
                <button type='submit'>Send</button>
            </form>
            {registered && (
                <p>Registro realizado con éxito {state.name}</p>
            )}
        </>
    )
}

export default Registro
