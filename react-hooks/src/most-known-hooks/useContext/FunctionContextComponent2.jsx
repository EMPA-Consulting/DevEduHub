import React from 'react';
// Importing useTheme and useThemeUpdate hooks from ThemeContext file
import { useTheme, useThemeUpdate } from './ThemeContext';

export default function FunctionContextComponent2(){
    // useTheme hook is used to access the value of the ThemeContext
    const darkTheme = useTheme()
    // useThemeUpdate hook is used to access the value of the ThemeUpdateContext
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
        <button onClick={toggleTheme}>Toggle Theme - Version 2</button>
        <div style={themeStyles}> Function Theme - Version 2</div>
        </>

    )
}




