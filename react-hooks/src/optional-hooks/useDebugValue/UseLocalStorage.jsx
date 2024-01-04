import { useState, useEffect, useCallback, useDebugValue } from 'react';

export function UseLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedValue = window.localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    // useDebugValue is a hook that can only be used in custom hooks (not in function components)
    // It allows you to display a label for custom hooks in React DevTools

    // Here, useDebugValue is used to display the current value of 'value' in React DevTools
    useDebugValue(value)

    // In this case, the function only runs in dev mode and when DevTools are open
    // This is useful for potencially slow code that you do not need to run in production mode
    useDebugValue(value, v => getValueSlowly(v)) 

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);


    const remove = useCallback(() => {
        window.localStorage.removeItem(key);
    }, [key]);

    return [value, setValue, remove]
}

// this function simulates a slow function
// It's used as a formatting function for useDebugValue to demonstrate that it only runs when necessary
function getValueSlowly(value) {
    for (let i = 0; i < 3000000000; i++) {}
    return value;
}