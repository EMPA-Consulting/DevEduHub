import React, { useState, useTransition } from 'react';

export default function UseTransitionHook() {
    // useTransition hook returns an isPending state and a startTransition function
    // isPending is true when the transition is in progress

    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const LIST_SIZE = 30000

    function handleChange(e) {
        setInput(e.target.value)

        // startTransition wraps updates that might cause a longer render time
        startTransition(() => {
            const _1 = []

            // This loop simulates a heavy computation
            for (let i = 0; i < LIST_SIZE; i++) {
                _1.push(e.target.value)
            }
            // setList is called after the loop is finished, so the UI doesn't freeze
            setList(_1)
        })
    }

    return (
        <>
            <input value={input} onChange={handleChange} />
            {isPending
                ? 'Loading...' // Show a loading message while updates are pending
                : list.map((item, index) => { // Render the list once updates are complete
                    return <div key={index}>{item}</div>
                })}
        </>
    )
}
// Note: useTransition is recommended for updates that could significantly slow down your app.
// unnecessary use can lead to more renderings and negatively impact performance.