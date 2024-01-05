import React, { useContext, useState } from 'react';

// Creating new contexts called ThemeContext and ThemeUpdateContext
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// Custom hook useTheme.
// This hook provides a way to access the current theme value held in ThemeContext.
// The value in ThemeContext represents whether the current theme is dark or not.
// By using this hook, components can get the current theme value without directly interacting with the context.
export function useTheme() {
    return useContext(ThemeContext);
}

// Custom hook useThemeUpdate.
// This hook provides a way to access the function held in ThemeUpdateContext.
// The function in ThemeUpdateContext is used to toggle the theme.
// By using this hook, components can toggle the theme without directly interacting with the context.
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    // The component returns a ThemeContext.Provider and ThemeUpdateContext.Provider wrapped component
    // ThemeContext.Provider provides the value of darkTheme
    // ThemeUpdateContext.Provider provides the toggleTheme function
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}