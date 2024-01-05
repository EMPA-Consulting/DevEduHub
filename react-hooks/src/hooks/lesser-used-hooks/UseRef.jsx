import React, { useState, useRef, useEffect } from 'react';

export default function UseRefHook() {
    // useRef is used here to store render count, avoiding unnecessary re-renders.
    const [name, setName] = useState('');
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    /*
    //This creates an infinite loop of re-renders:

    const [name, setName] = useState('');
    const [renderCount, setRenderCount] = useState(0);
    useEffect(() => {
        setRenderCount(prevRenderCount => prevRenderCount + 1);
    })
    */

    // useRef is used here to access the input DOM node.
    const inputRef = useRef();

    function focus() {
        inputRef.current.focus();
    }

    // useRef is used here to store the previous name value, avoiding unnecessary re-renders.
    const prevName = useRef('');

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '16rem' }}>

            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times </div>

            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <button onClick={focus}>Focus</button>

            <div>My name is {name} and it used to be {prevName.current}</div>

        </div>
    )
}

