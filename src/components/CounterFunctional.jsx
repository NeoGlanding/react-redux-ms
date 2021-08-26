import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { counterTogglerAction } from '../storage/reduxStore';

const CounterFunctional = props => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    return (
        <div>
            <h1>Functional Counter - {counter}</h1>
            <button onClick={() => dispatch(counterTogglerAction.increment())}>Add Functional Counter</button>
            <button onClick={() => dispatch(counterTogglerAction.decrement())}>Decrement Functional Counter</button>
        </div>
    )
}

export default CounterFunctional;