import React from 'react';
import { connect } from 'react-redux';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.forEslintOnly = '';
    }

    addCounter() {
        this.props.increment();
    }

    decrementCounter() {
        this.props.decrement();
    }

    render() {
        return (
            <div>
                <h1>Class Counter - {this.props.counter}</h1>
                <button onClick={this.addCounter.bind(this)}>Add Class Counter</button>
                <button onClick={this.addCounter.bind(this)}>Add Class Counter</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'increment', payload: 1}),
        decrement: () => dispatch({type: 'decrement', payload: 1})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
