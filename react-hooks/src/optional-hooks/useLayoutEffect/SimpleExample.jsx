import { useState, useLayoutEffect } from "react";

export default function SimpeExample () {
    const [ count, setCount ] = useState(0);

    // useLayoutEffect is used here to log the current count
    // It runs before the browser has a chance to paint, so it will log the updated count before the screen is updated
    // If we used useEffect instead, it would log the count after the screen is updated
    useLayoutEffect(() => { 
        console.log(count)
    }, [count]) // This effect runs every time 'count' changes

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <div>{count}</div>
        </div>
    )
}