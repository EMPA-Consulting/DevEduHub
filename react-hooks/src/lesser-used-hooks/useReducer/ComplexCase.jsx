import React, { useReducer, useState } from 'react'
import TODO from './Todo'

// Define action types as constants
export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

// Reducer function to handle state changes based on action type
function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            // Return a new array with all existing todos and a new todo
            // The new todo's name is taken from the action's payload
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            // Map through todos and toggle the complete status of the todo with the matching id
            // The id is taken from the action's payload
            return todos.map(todo => {
                if(todo.id === action.payload.id){
                    return { ...todo, complete: !todo.complete}
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            // Filter out the todo with the matching id
            // The id is taken from the action's payload
            return todos.filter(todo => todo.id !== action.payload.id)
        default: 
        // If the action type doesn't match any cases, return the current state
        return todos
    }
}

// Function to create a new todo
function newTodo(name) {
    return { id: Date.now(), name: name, complete: false}
}

export default function UseReducerHook2() {
    // Use the useReducer hook with the reducer function and an empty initial state
    const [todos, dispatch] = useReducer(reducer, [])
    // Use the useState hook for the todo name
    const [name, setName] = useState('')

    // Handle form submission
    function handleSubmit(e){
        e.preventDefault()
        // Dispatch an action to add a todo
        // The todo's name is passed in the action's payload
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name} })
        // Clear the input field
        setName('')
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </form>
            {/* Map through todos and render a TODO component for each one */}
            {todos.map(todo => {
                return <TODO key={todo.id} todo={todo} dispatch={dispatch} />
            })}

        </>
    )
}
