// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    toggler: true
}

const initialAuthState = {
    logged: false
}

const counterToggler = createSlice({
    name: 'counterToggler',
    initialState: initialCounterState,
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
});

const authState = createSlice({
    name: "Authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.logged = true
        },
        logout(state) {
            state.logged = false;
        }
    }
});

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

export const counterTogglerAction = counterToggler.actions;
const store = configureStore({
    reducer: {counter: counterToggler.reducer, auth: authState.reducer}
});

export const authAction = authState.actions;

export default store;