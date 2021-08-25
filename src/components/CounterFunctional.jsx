import React, {useState} from 'react'

const CounterFunctional = props => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Functional Counter - {counter}</h1>
            <button onClick={() => setCounter(state => state + 1)}>Add Functional Counter</button>
        </div>
    )
}

export default CounterFunctional;