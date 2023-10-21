import React, {useReducer, ChangeEvent} from "react";
import {reducer, initialState} from "./counterReducer";
import type {ActionType} from "./counterReducer";
import "./Counter.css";

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const onIncrease = () => {
        const action: ActionType = {type: "increaseCount"}
        dispatch(action);
    }
    const onDecrease = () => {
        const action: ActionType = {type: "decreaseCount"}
        dispatch(action);
    }
    const 
}