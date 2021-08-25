import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const CounterFunctional = props => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    return (
        <div>
            <h1>Functional Counter - {counter}</h1>
            <button onClick={() => dispatch({type: 'increment'})}>Add Functional Counter</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement Functional Counter</button>
        </div>
    )
}

export default CounterFunctional;