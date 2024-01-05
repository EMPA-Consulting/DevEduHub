import { useState } from 'react';
import { UseLocalStorage } from './UseLocalStorage';

export default function UseDebugValueHook() {
    const [firstName, setFirstName] = UseLocalStorage('firstName', 'John');
    const [lastName, setLastName] = useState('Doe');

    return (
        <>
            First: {''}
            <input value={firstName} onChange={e => setFirstName(e.target.value)} />
            <br />
            Last: {''}
            <input value={lastName} onChange={e => setLastName(e.target.value)} />
        </>
    )
}