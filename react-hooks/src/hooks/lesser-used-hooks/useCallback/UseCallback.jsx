import React, { useCallback, useState } from 'react';
import List from './List';

export default function UseCallbackHook() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // useCallback is used to remember the function getItems, so it will only be recreated when 'number' changes.
    // This is important because every time the component re-renders, a new getItems function would be created,
    // causing the List component to log 'Updating Items' and update its items unnecessarily.
    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor];
    }, [number]);

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />

            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle theme
            </button>

            <List getItems={getItems}></List>

        </div>
    )
}

// useMemo returns a value, useCallback returns a function that's remembered between renders. 
// This makes useCallback suitable for this example, where the List component needs a function.