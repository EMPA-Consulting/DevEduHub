import { useState } from "react";
import List from "./List";

export default function UseDeferredValueHook() {
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (
        <div className="scroll-content">
            <div className="v-container">
                <input value={input} onChange={handleChange} />
                {/* Pass the current input value to the List component */}
                <List input={input} />
            </div>
        </div>
    )
}