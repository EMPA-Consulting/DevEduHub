import React from 'react';
import SimpeExample from './SimpleExample';
import ModalExample from './ModalExample';

export default function UseLayoutEffectHook() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <SimpeExample />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center'}}>
                <ModalExample />
            </div>
        </div>
    )
}