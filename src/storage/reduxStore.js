// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    toggler: true
}

const counterToggler = createSlice({
    name: 'counterToggler',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        toggle(state) {
            state.toggler = !state.toggler
        }
    }
})

// const reducer = (state = initialState, action) => {    
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + action.payload,
//             toggler: state.toggler
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter + action.payload,
//             toggler: state.toggler

//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             toggler: !state.toggler

//         }
//     }

//     return state;
// }

const store = configureStore({
    reducer: counterToggler.reducer
});

export const counterTogglerAction = counterToggler.actions;

export default store;