import React, { useState } from 'react';
import FunctionContextComponent1 from "./FunctionContextComponent1";

// Creating a new context called ThemeContext
export const ThemeContext = React.createContext();

export default function UseContextHook1() {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    // The component returns a ThemeContext.Provider wrapped component
    return (
        <>
            {/* ThemeContext.Provider is used to pass the current theme to the tree below */}
            {/* Any component under this provider can access the value of the context using useContext hook */}
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme - Ver 1</button>
                {/* FunctionContextComponent1 is a child component that uses the value of the context */}
                <FunctionContextComponent1 />
            </ThemeContext.Provider>
        </>
    )
}