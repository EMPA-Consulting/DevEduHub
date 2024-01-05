import { useMemo, useDeferredValue, useEffect } from 'react';

export default function List({ input }) {
    const LIST_SIZE = 20000;
    // useDeferredValue allows React to defer a value change until other, more urgent updates have completed
    const deferredInput = useDeferredValue(input)
    const list = useMemo(() => {
        const _1 = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            _1.push(deferredInput)
        }
        return _1;
    }, [deferredInput])

    useEffect(() => {
        // Log the current and deferred input values to see the difference
        console.log(`Input : ${input}\nDeferred Input : ${deferredInput}`)
    }, [input, deferredInput])

    return list
}