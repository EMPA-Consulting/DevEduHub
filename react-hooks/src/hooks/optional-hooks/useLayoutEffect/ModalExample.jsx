import { useRef, useState, useLayoutEffect } from "react";

export default function ModalExample() {
    const [show, setShow] = useState(false);
    const popup = useRef()
    const button = useRef()

    // useLayoutEffect is used here to adjust the position of the popup
    // It runs before the browser has a chance to paint, so the user won't see any intermediate state
    // If we used useEffect instead, the popup might appear at the wrong position first and then jump to the correct position
    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`
    }, [show])

    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}>
                Click Here
            </button>
            {show && (
                <div style={{ position: 'absolute' }} ref={popup}>
                    This is a popup
                </div>
            )}
        </>
    )
}