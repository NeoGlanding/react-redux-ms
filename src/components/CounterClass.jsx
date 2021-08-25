import React from 'react'

class CounterClass extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    addCounter() {
        this.setState(state => {
            return {
                counter: state.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Class Counter - {this.state.counter}</h1>
                <button onClick={this.addCounter.bind(this)}>Add Class Counter</button>
            </div>
        )
    }
}

export default CounterClass;
