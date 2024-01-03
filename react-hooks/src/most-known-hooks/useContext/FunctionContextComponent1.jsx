import React, { useContext } from 'react';
import { ThemeContext } from './UseContextHook1';

export default function FunctionContextComponent1(){
    // useContext hook is used to access the value of the ThemeContext
    // It returns the current context value for that context
    const darkTheme = useContext(ThemeContext);
    // themeStyles object is created based on the value of darkTheme

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    // The component returns a div with the style set to themeStyles
    return (
        <div style={themeStyles}> Function Theme - Version 1</div>
    )
}