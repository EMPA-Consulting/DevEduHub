import React from 'react'
import { ACTIONS } from './ComplexCase'

// The Todo component receives a todo object and a dispatch function as props
// The dispatch function is used to dispatch actions to the reducer
export default function Todo({ todo, dispatch}) {
    return (
        <div>
            <span style={{ color : todo.complete ? '#AAA' : '#000'}}>
                {todo.name}
            </span>
            {/* The Toggle button dispatches a TOGGLE_TODO action with the todo's id in the payload */}
            <button onClick={() => dispatch ({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id}})}>Toggle</button>
            
            {/* The Delete button dispatches a DELETE_TODO action with the todo's id in the payload */}
            <button onClick={() => dispatch ({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id}})}>Delete</button>
        </div>
    )
}
