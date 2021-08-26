import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CounterFunctional from './components/CounterFunctional'
import CounterClass from './components/CounterClass'
import Toggler from './components/Toggler'

const ReduxComp = () => {
    const toggle = useSelector(state => state.toggler);
    const dispatch = useDispatch();
    console.log(toggle)

    return (
        <React.Fragment>
            {toggle ? <Toggler /> : null}
            <CounterFunctional />
            <CounterClass />
            <button onClick={() => dispatch({type: 'toggle'})}>Toggle</button>
        </React.Fragment>
    )
}

export default ReduxComp;