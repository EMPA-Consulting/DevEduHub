import React, { useState, useEffect, useMemo } from 'react';

export default function UseMemoHook() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // useMemo is used to remember the result of slowFunction(number).
    // This means that slowFunction(number) will only be re-computed when 'number' changes,not every time the component re-renders. 

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    // useMemo is used to remember the themeStyles object.
    // This means that a new themeStyles object will only be created when 'dark' changes,
    // not every time the component re-renders. This is important for the useEffect hook below.
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    // useEffect is used to log 'Theme Changed' to the console whenever 'themeStyles' changes.
    // Because 'themeStyles' is remembered with useMemo, it only changes when 'dark' changes.
    // Therefore, 'Theme Changed' is only logged when the theme changes, not when 'number' changes.
    useEffect(() => {
        console.log('Theme Changed')
    }, [themeStyles])

    return (
        <>
            <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}> {doubleNumber} </div>
        </>
    )
}

// This function simulates a slow function generating delay.
function slowFunction(num) {
    console.log('Calling Slow Function')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2;
}

// Note: useMemo should only be used when necessary, otherwise it will cause additional memory usage and perfornance issues
// It's recommended to use useMemo when a function is slow (like slowFunction) or when referential equality matters (like for themeStyles).

