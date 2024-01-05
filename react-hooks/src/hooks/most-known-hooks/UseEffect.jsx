import React, { useState , useEffect} from 'react';

export default function useEffectHook(){
    const [resourceType, setResourceType] = useState('Posts');
    const [items, setItems] = useState([]);

    // Log 'render' to the console every time the component renders
    console.log('render')

    // useEffect hook that runs once on component mount
    useEffect(() => {
        console.log('onMount')

        // This is a cleanup function, it runs when the component unmounts 
        return () => {
        console.log('unMount')
    };
    }, []) // Empty dependency array means this effect runs once on mount and not on updates

    // useEffect hook that runs whenever 'resourceType' changes
    useEffect(() => {
        console.log('resource typce changed')
    }, [resourceType])

    // useEffect hook that fetches data whenever 'resourceType' changes
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType] ) // 'resourceType' in the dependency array means this effect runs on updates to 'resourceType'


    
    return (
        <>
            <div className='h-container'>
                <button onClick={() => setResourceType('Posts')}>Posts</button>
                <button onClick={() => setResourceType('Users')}>Users</button>
                <button onClick={() => setResourceType('Comments')}>Users</button>
            </div >
            <div className="scroll-content">
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
        </>
    )
}



