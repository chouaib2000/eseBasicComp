import { useEffect, useRef, useState } from "react"

function createData() {
    return{
        username: '',
        password: '',
        session: false
    }
}

export function Myform() {
    const [data, setData] = useState(createData())

    const mountedRef = useRef(false)

    useEffect(() => {
        if(!mountedRef.current) {
            mountedRef.current = true
            console.log('Mounting for the first time')
        } else {
            console.log('Mounting again for debug puroposes')
        }

        inputRef.current?.focus()
    }, [])

    const inputRef = useRef(null)

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked: value,
            }
        })
    }

    function handleResetForm() {
        setData(createData())
    }

    function handleLoginFormSubmit(event) {
        event.preventDefault()

        console.log('Login button pressed', data)
    }

    console.log(inputRef)

    return (
        <form onSubmit={handleLoginFormSubmit} >
            <h1>My form</h1>
            <input ref={inputRef} name="username" value={data.username} onChange={handleInputChange}/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange}/>
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
            <button type="submit" disabled={!data.username || !data.password} onClick={handleLoginFormSubmit} >Login</button>
            <button type="button" onClick={handleResetForm}>Reset</button>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </form>
    )
}