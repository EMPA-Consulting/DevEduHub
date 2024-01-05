import React, { useReducer } from 'react';

// Define a set of action types as constants. These will be used to identify the type of action to be performed.
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

// The reducer function is used to determine how the state should change based on the action type.
// It takes the current state and an action, and returns the new state.
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            // If the action type is 'increment', increase the count by 1.
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            // If the action type is 'decrement', decrease the count by 1.
            return { count: state.count - 1 }
        default:
            // If the action type doesn't match any cases, return the current state without making any changes.
            return state
    }
}

export default function UseReducerHook1() {
    // The useReducer hook is used to manage complex state logic. It takes a reducer function and an initial state,
    // and returns the current state and a dispatch function.
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    // The increment function dispatches an 'increment' action when called.
    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    // The decrement function dispatches a 'decrement' action when called.
    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    return (
        <div className='h-container'>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}