import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"


export function State2({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement() {
        setCounter((c) => c - 1)
    }

    function handleCounterReset() {
        setCounter(initialValue)
    }

    return (
        <div>
            <CounterDisplay counterVal={counter}/>
            <button onClick={handleCounterIncrement}>+</button>
            <button onClick={handleCounterDecrement}>-</button>
            <button onClick={handleCounterReset}>0</button>
        </div>
    )
}