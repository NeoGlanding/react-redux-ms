import React from 'react'
import CounterFunctional from './components/CounterFunctional'
import CounterClass from './components/CounterClass'

const ReduxComp = () => {
    return (
        <React.Fragment>
            <CounterFunctional />
            <CounterClass />
        </React.Fragment>
    )
}

export default ReduxComp;