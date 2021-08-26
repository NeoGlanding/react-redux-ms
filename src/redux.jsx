import React from 'react';
import { counterTogglerAction } from './storage/counterToggler';
import { useSelector, useDispatch } from 'react-redux'
import CounterFunctional from './components/CounterFunctional'
import CounterClass from './components/CounterClass'
import Toggler from './components/Toggler'
import Auth from './components/Auth'

const ReduxComp = () => {
    const toggle = useSelector(state => state.counter.toggler);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {toggle ? <Toggler /> : null}
            <CounterFunctional />
            {/* <CounterClass /> */}
            <button onClick={() => dispatch(counterTogglerAction.toggle())}>Toggle</button>
            <br></br>
            <Auth />
        </React.Fragment>
    )
}

export default ReduxComp;