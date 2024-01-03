import React, { useState } from 'react';
import FunctionContextComponent1 from "./FunctionContextComponent1";

export const ThemeContext = React.createContext();

export default function UseContextHook1() {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent1 />
            </ThemeContext.Provider>
        </>
    )
}