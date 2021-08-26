// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { counterToggler } from "./counterToggler";
import { authState } from "./auth";

const store = configureStore({
    reducer: {counter: counterToggler.reducer, auth: authState.reducer}
});



export default store;