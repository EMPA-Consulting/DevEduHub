import React from 'react'
import UseReducerHook1 from './SimpleCase'
import UseReducerHook2 from './ComplexCase'

export default function UseReducerHook() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center'}}>
                <UseReducerHook1 />
                <UseReducerHook2 />
            </div>
        </div>
    )
}