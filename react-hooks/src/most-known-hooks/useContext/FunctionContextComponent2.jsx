import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

export default function FunctionContextComponent2(){
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
        <button onClick={toggleTheme}>Toggle Theme Custom</button>
        <div style={themeStyles}> Function Theme Custom</div>
        </>

    )
}




