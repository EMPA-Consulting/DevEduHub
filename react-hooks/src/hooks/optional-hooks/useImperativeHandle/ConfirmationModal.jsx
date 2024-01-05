import React, { useImperativeHandle, useRef, forwardRef } from 'react';
import './ConfirmationModal.css';

// The forwardRef is used to get a ref from a parent component
const ConfirmationModal = forwardRef(({ isOpen, onClose }, ref) => {
    // useRef is used to create references to elements in the DOM
    const closeRef = useRef();
    const denyRef = useRef();
    const confirmRef = useRef();

    // useImperativeHandle is a hook that allows you to customize the value that is exposed to parent components when using ref.
    // It's used when you want to expose specific properties or methods from a child component to a parent component.
    // In this case, it's used to expose methods to focus on specific buttons in the modal.
    // This can be useful when you want to programmatically control the focus in response to user interactions.
    // For example, you might want to immediately focus on a particular button when the modal opens, or move the focus to a different button when the user presses a certain key.
    useImperativeHandle(ref, () => ({
        focusCloseBtn: () => closeRef.current?.focus(),
        focusDenyBtn: () => denyRef.current?.focus(),
        focusConfirmBtn: () => confirmRef.current?.focus(),
    }));

    if (!isOpen) return null;

    // Render the modal with buttons. The refs are attached to the buttons so they can be focused on
    return (
        <div className='modal'>
            <button className='close-btn' ref={closeRef} onClick={onClose}>
                &times;
            </button>
            <div className='modal-header'>
                <h1>Title</h1>
            </div>
            <div className='modal-body'> Do you confirm? </div>
            <div className='modal-footer'>
                <button className='confirm-btn' ref={confirmRef} onClick={onClose}> Yes </button>
                <button className='deny-btn' ref={denyRef} onClick={onClose}> No </button>
            </div>
        </div>
    )
})

export default ConfirmationModal;