import React, { useContext } from 'react';
import { ThemeContext } from './UseContextHook1';

export default function FunctionContextComponent1(){
    const darkTheme = useContext(ThemeContext);
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <div style={themeStyles}> Function Theme </div>
    )
}